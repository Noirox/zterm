// This is the top-most component in the app.
import * as React from 'react'
import './main.css'
import {ViewPane} from './ViewPane'
import {Sideview} from './sideview'
import * as Mousetrap from 'mousetrap'

export class RootComponent extends React.Component<{}, {}> {
  state = {
    show: false,
  }

  toggle() {
    this.setState({show: !this.state.show})
  }

  constructor(props: any) {
    super(props)
    Mousetrap.reset()
    Mousetrap.bind('f4', this.toggle.bind(this), 'keydown')
  }

  render() {
    return (
      <div style={{padding: '5px', height: '100vh'}}>
        <Sideview show={this.state.show}/>
        <ViewPane/>
      </div>
    )
  }
}
