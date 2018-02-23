import * as React from 'react'
import {ReactInstance} from 'react'
import {Terminal} from 'xterm'
import * as fit from 'xterm/lib/addons/fit/fit'

interface IYate3270Refs {
  [key: string]: ReactInstance

  termContainer?: HTMLElement
}

export class Yate3270 extends React.Component<{}, {}> {
  private xterm: Terminal

  public refs: IYate3270Refs

  componentDidMount() {
    Terminal.applyAddon(fit)

    this.xterm = new Terminal()
    this.xterm.attachCustomKeyEventHandler(this.keyboardHandler)
    this.xterm.open(this.refs.termContainer)
    this.xterm.writeln('fuck')
    this.xterm.on('key', (key, ev) => {
    })

  }

  keyboardHandler(e: KeyboardEvent) {
    Mousetrap.trigger(e.key.toLowerCase(), e.type)
    return true
  }

  componentWillUnmount() {
    if (this.xterm) {
      console.log('xterm destroy')
      this.xterm.destroy()
      this.xterm = null
    }
  }

  render() {
    return <div ref='termContainer'/>
  }
}
