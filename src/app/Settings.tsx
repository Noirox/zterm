import * as React from 'react';
import {TabModel} from './TabModel';
import {Tab, TabId, Tabs} from '@blueprintjs/core';
import {SettingsPanel} from './Settings.Panel';
import {SettingsPanelTitle} from './Settings.PanelTitle';
import {SettingsGeneral} from './Settings.General';
import {SettingsKeybindings} from './Settings.Keybinding';


export class Settings extends React.Component {
  state: { showWelcome: boolean, activeTabId: TabId } = {
    showWelcome: true,
    activeTabId: undefined,
  };

  handlePublicChange = () => this.setState({showWelcome: !this.state.showWelcome});


  render() {

    return (
      <div className='pt-dark'>
        <Tabs
          animate={true}
          id='TabsExample'
          onChange={this.handleTabChange}
          renderActiveTabPanelOnly={true}
          vertical={true}
        >
          <input style={{marginBottom: '0px'}} className='pt-input' type='text' placeholder='Search...' />
          <Tab
            id='general'
            title={<SettingsPanelTitle title='General' icon='sliders-h' />}
            panel={
              <SettingsPanel
                title='General Settings'
                icon='sliders-h'
              >
                <SettingsGeneral />
              </SettingsPanel>
            }
          />
          <Tab
            id='keybindings'
            title={<SettingsPanelTitle title='Keybindings' icon='keyboard' />}
            panel={
              <SettingsPanel title='Keybindings' icon='keyboard'>
                <SettingsKeybindings />
              </SettingsPanel>
            }
          />
          <Tabs.Expander />
        </Tabs>

      </div>);
  }

  private handleTabChange = (activeTabId: TabId) => this.setState({activeTabId});
}


export const SettingsTab = new TabModel({title: 'Settings', id: 'settings', content: <Settings />});
