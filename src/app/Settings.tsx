import * as React from 'react';
import {TabModel} from './TabModel';

export class Settings extends React.Component {
  render() {
    return (<div>inside settings component</div>);
  }
}

export const SettingsTab = new TabModel({title: 'Settings', id: 'settings', content: <Settings />});
