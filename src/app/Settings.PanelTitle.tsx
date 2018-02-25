import {theme} from './theme';
import * as React from 'react';

export const SettingsPanelTitle = (props: ISettingsPanelTitleProps) =>
  (
    <span style={{color: theme.textColorActive}}>
      <i
        style={{paddingRight: '5px', marginTop: '10px', color: theme.textColor, fontSize: '1rem'}}
        className={`fas fa-1x fa-${props.icon}`} />
      {props.title}
      </span>
  );

interface ISettingsPanelTitleProps {
  title: string
  icon: string
}
