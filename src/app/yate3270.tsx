import * as React from 'react';
import {ReactInstance} from 'react';
import {Terminal} from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';

interface IYate3270Refs {
  [key: string]: ReactInstance

  termContainer?: HTMLElement
}

export class Yate3270 extends React.Component<{}, {}> {
  private xterm: Terminal;

  public refs: IYate3270Refs;

  componentDidMount() {
    Terminal.applyAddon(fit);

    this.xterm = new Terminal();
    this.xterm.attachCustomKeyEventHandler(this.keyboardHandler);
    this.xterm.open(this.refs.termContainer);
    this.xterm.on('key', (key, ev) => {
    });
    this.xterm.writeln('File  Edit  Edit_Settings  Menu  Utilities  Compilers  Test  Help');
    this.xterm.writeln('———————————————————————————————————————————————————————————————————————————————');
    this.xterm.writeln('CA31       USER.PROCLIB($$$COIBM) - 01.03                  Columns 00001 00072');
    this.xterm.writeln('Command ===>                                                  Scroll ===> CSR');
    this.xterm.writeln('****** ***************************** Top of Data ******************************');
    this.xterm.writeln('000001 ab');
    this.xterm.writeln('****** **************************** Bottom of Data ****************************');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('');
    this.xterm.writeln('F1=Help      F2=Split     F3=Exit      F5=Rfind     F6=Rchange   F7=Up');
    this.xterm.writeln('F8=Down      F9=Swap     F10=Left     F11=Right    F12=Cancel');
    this.xterm.writeln('*DSLIST');
  }

  keyboardHandler(e: KeyboardEvent) {
    Mousetrap.trigger(e.key.toLowerCase(), e.type);
    return true;
  }

  componentWillUnmount() {
    if (this.xterm) {
      console.log('xterm destroy');
      this.xterm.destroy();
      this.xterm = null;
    }
  }

  render() {
    return <div ref='termContainer' />;
  }
}
