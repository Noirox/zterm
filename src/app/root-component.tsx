// This is the top-most component in the app.
import * as React from 'react';
import './main.css';
import {ViewPane} from './ViewPane';

export class RootComponent extends React.Component<{}, {}> {
  render() {
    return (
      <div style={{padding: '5px', height: '100vh'}}>
        <div className="burger">
          <span></span>
        </div>
        <ViewPane />
      </div>
    );
  }
}
