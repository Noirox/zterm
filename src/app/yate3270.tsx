import * as React from 'react'
import { Terminal } from 'xterm'
import { ReactInstance } from 'react'
import * as fit from 'xterm/lib/addons/fit/fit'
import * as fullscreen from 'xterm/lib/addons/fullscreen/fullscreen'

interface IYate3270Refs {
  [key: string]: ReactInstance
  termContainer?: HTMLElement
}

export class Yate3270 extends React.Component<{}, {}> {
  private xterm: Terminal

  public refs: IYate3270Refs

  componentDidMount() {
    Terminal.applyAddon(fit)
    Terminal.applyAddon(fullscreen)

    this.xterm = new Terminal()
    this.xterm.open(this.refs.termContainer)
    this.xterm.writeln('fuck')
  }

  componentWillUnmount() {
    if (this.xterm) {
      console.log('xterm destroy')
      this.xterm.destroy()
      this.xterm = null
    }
  }

  render() {
    return <div ref='termContainer' />
  }
}
