import * as React from 'react';
import {KeyCombo} from '@blueprintjs/core';

export class SettingsKeybindings extends React.Component {
  render() {
    return (
      <div style={{width: '100%'}}>
        <KeyCombo combo="meta + k" />
      </div>
    );
  }
}
