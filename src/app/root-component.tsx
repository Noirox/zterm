// This is the top-most component in the app.
import * as React from 'react'
import SplitterLayout from 'react-splitter-layout'
import './main.css'

export class RootComponent extends React.Component<{}, {}> {
  render() {
    return (
      <SplitterLayout>
        <div>Pane 1</div>
        <div>Pane 2</div>
      </SplitterLayout>
    )
  }
}
