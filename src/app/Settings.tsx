import * as React from 'react';
import {TabModel} from './TabModel';
import {Switch} from '@blueprintjs/core';

export class Settings extends React.Component {
  state = {
    showWelcome: true,
  };

  handlePublicChange = () => this.setState({showWelcome: !this.state.showWelcome});

  
  render() {
    const {showWelcome} = this.state;
    return (
      <div>
        inside settings component
        <Switch
          checked={showWelcome}
          label='Show welcome page when opening YATE-3270-'
          onChange={this.handlePublicChange}
        />
      </div>);
  }
}

export const SettingsTab = new TabModel({title: 'Settings', id: 'settings', content: <Settings />});
