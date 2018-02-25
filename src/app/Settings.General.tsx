import {Switch} from '@blueprintjs/core';
import * as React from 'react';

export const SettingsGeneral = (props: ISettingsGeneralProps) => {
  const {showWelcome, handlePublicChange} = props;
  return (
    <Switch
      checked={showWelcome}
      label='Show welcome page when opening YATE-3270-'
      onChange={handlePublicChange}
    />
  );
};


interface ISettingsGeneralProps {
  showWelcome?: boolean
  handlePublicChange?: () => void
}
