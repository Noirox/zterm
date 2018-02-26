import * as net from 'net';
import {Socket} from 'net';
import * as events from 'events';
import {Promise} from 'bluebird';
import {TelnetProcessor} from './tnProcessor';
import Bluebird = require('bluebird');

const debug = require('debug')('client');

export interface IClientOpts {
  host: string
  port: number
  timeout: number
  debug: boolean
}

const DEFAULT_OPTS: IClientOpts = {
  host: 'ca31',
  port: 923,
  timeout: 5000,
  debug: true,
};

class Tn3270Client extends events.EventEmitter {
  private socket: Socket;
  private tp = new TelnetProcessor();

  constructor() {
    super();
  }

  connect(opts?: IClientOpts): Bluebird<any> {
    const actualOpts = this.getActualOpts(opts);
    return new Promise(this.doConnect(actualOpts));
  }

  private doConnect(opts: IClientOpts) {
    return (resolve) => {
      this.socket = net.createConnection(opts.port, opts.host,
        () => resolve());

      this.socket.setTimeout(opts.timeout, () => {
        if (this.socket.connecting === true) {
          this.emit('error', 'Cannot connect');
          this.socket.destroy();
        }
        else {
          this.emit('timeout');
        }
      });

      this.socket.on('data', (data: Buffer) => {
        if (opts.debug) {
          debug('recv: %s', this.dataToString(data));
        }
        this.tp.process(data);
      });

      this.socket.on('error', error => {
        this.emit('error', error);
      });

      this.socket.on('end', () => {
        this.emit('end');
      });

      this.socket.on('close', () => {
        this.emit('close');
      });
    };
  }

  private getActualOpts(opts: IClientOpts): IClientOpts {
    return Object.assign({}, DEFAULT_OPTS, opts || {});
  }

  private dataToString(data: Buffer): string[] {
    return Array.from(data.values()).map(TelnetProcessor.byteToStr);
  }
}


const cli = new Tn3270Client();
cli.connect().then(() => console.log('connected'));
