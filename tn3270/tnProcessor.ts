import {CommandProcessor} from './tnCmdProcessor';

const debug = require('debug')('tnProcessor');

export class TelnetProcessor {
  static tnCmdStr = {
    0xFF: 'IAC',
    0xEF: 'EOR',
    0xF0: 'SE',
    0xF1: 'NOP',
    0xF4: 'IP',
    0xFA: 'SB',
    0xFB: 'WILL',
    0xFC: 'WONT',
    0xFD: 'DO',
    0xFE: 'DONT',
    0x00: 'SB_BINARY',
    0x18: 'SB_TERMINAL_TYPE',
    0x19: 'SB_EOR',
    0x28: 'SB_TN3270E'
  };

  static tnCmd = {
    IAC: 0xFF,                // "Interpret as Command"
    EOR: 0xEF,
    SE: 0xF0,                 // End of subnegotiation parameters
    NOP: 0xF1,                // No operation. 🙈
    IP: 0xF4,                 // The function IP. Interrupt Process
    SB: 0xFA,                 // Indicates that what follows is
                              // subnegotiation of the indicated
                              // option.

    WILL: 0xFB,               // Indicates the desire to begin
                              // performing, or confirmation that
                              // you are now performing, the
                              // indicated option.

    WONT: 0xFC,               // Indicates the refusal to perform,
                              // or continue performing, the
                              // indicated option.

    DO: 0xFD,                 // Indicates the request that the
                              // other party perform, or
                              // confirmation that you are expecting
                              // the other party to perform, the
                              // indicated option.

    DONT: 0xFE,               // Indicates the demand that the
                              // other party stop performing,
                              // or confirmation that you are no
                              // longer expecting the other party
                              // to perform, the indicated option
    SB_BINARY: 0x00,
    SB_TERMINAL_TYPE: 0x18,
    SB_EOR: 0x19,
    SB_TN3270E: 0x28
  };

  static byteToStr = (byte: number) => {
    const cmdStr = TelnetProcessor.tnCmdStr[byte];
    return cmdStr ? cmdStr : `[${byte},${byte.toString(16).toUpperCase()}]`;
  }

  function;
  private data = [16500];
  private dataPtr;
  private pending;              // last byte was IAC, must check next byte
  private weirdData;            // when stream starts with two IACs
  private command;              // one of DO, DONT, WILL, WONT
  private cp = new CommandProcessor();

  reset() {
    this.dataPtr = 0;
    this.weirdData = false;
    this.command = 0;
  }

  process(byteBuffer: Buffer) {
    for (let byte of byteBuffer) {
      this.data[this.dataPtr++] = byte;

      if (byte == TelnetProcessor.tnCmd.IAC) {
        if (this.pending) {
          this.pending = false;
          --this.dataPtr;
          if (this.dataPtr === 1) {
            this.weirdData = true;
          }
        } else {
          this.pending = true;
        }
        continue;
      }

      if (this.pending) {
        this.pending = false;
        if (byte === TelnetProcessor.tnCmd.EOR) {
          this.cp.processRecord(this.data, this.dataPtr);
          this.reset();
          continue;
        }

        if (this.data[0] !== TelnetProcessor.tnCmd.IAC || this.weirdData) {
          this.dataPtr -= 2;
          this.cp.processData(this.data, this.dataPtr);
          this.reset();

          this.data[this.dataPtr++] = TelnetProcessor.tnCmd.IAC;
          this.data[this.dataPtr++] = byte;
        }

        // leave IAC SB in buffer
        if (byte == TelnetProcessor.tnCmd.SB) {
          continue;
        }

        if (byte == TelnetProcessor.tnCmd.SE) {
          this.cp.processSubcommand(this.data, this.dataPtr);
          this.reset();
          continue;
        }

        // known three-byte commands
        if (byte === TelnetProcessor.tnCmd.DO ||
          byte === TelnetProcessor.tnCmd.DONT ||
          byte === TelnetProcessor.tnCmd.WILL ||
          byte === TelnetProcessor.tnCmd.WONT) {
          this.command = byte;               // save it and wait for the third byte
          continue;
        }

        // known two-byte commands
        if (byte == TelnetProcessor.tnCmd.NOP ||
          byte == TelnetProcessor.tnCmd.IP) {
          this.cp.processCommand(this.data, this.dataPtr);
          this.reset();
          continue;
        }

        debug('Unknown command: %02X%n', byte);

      } else if (this.command != 0) {
        // the third byte has arrived (in byte)
        this.cp.processCommand(this.data, this.dataPtr);
        this.reset();
      }

    }
  }
}
