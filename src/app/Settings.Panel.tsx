import {theme} from './theme';
import {SettingsPanelTitle} from './Settings.PanelTitle';
import * as React from 'react';

export const SettingsPanel = (props: ISettingsPanelProps) => {
  const {title, icon} = props;
  return (
    <div style={{width: '100%', height: 'calc(100vh - 74px)', overflowY: 'auto', padding: '25px 0 0 0'}}>
      <h3>
        <SettingsPanelTitle title={title} icon={icon} />
      </h3>
      <div style={{height: '1px', width: '100%', borderBottom: theme.spacer, marginBottom: '10px'}} />
      {props.children}
    </div>
  );
};

interface ISettingsPanelProps {
  title: string
  icon: string
  children: JSX.Element
}
