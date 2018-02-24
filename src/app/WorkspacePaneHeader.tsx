import {css} from 'glamor';
import * as React from 'react';
import {WorkspacePaneHeaderTab} from './WorkspacePaneHeaderTab';
import {theme} from './theme';

const workspacePaneHeaderStyles = css({
  listStyle: 'none',
  display: 'flex',
  padding: 0,
  height: theme.workspace.header.height,
  width: '100vw',
  // position: 'absolute',
  left: 0,
  top: 0,
  //margin: `0 ${theme.sideNavbar.width}`
  margin: 0,
  borderBottom: theme.spacer,
});

const workspacePaneHeaderControlStyles = css({
  position: 'absolute',
  right: '5px',
  top: 0,
  height: theme.workspace.header.height,
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  zIndex: theme.workspace.header.zIndex,
  backgroundColor: theme.backgroundColorBase,
  borderBottom: theme.spacer,
  '>.pt-button': {
    color: theme.textColor,
    marginLeft: 0,
  },
  '>.pt-button:hover': {
    transition: theme.transitionTime,
    color: theme.workspace.header.color,
  },
});

export const WorkspacePaneHeader = () => {
  return (
    <div style={{backgroundColor: theme.backgroundColorBase}}>
      <ul className={`${workspacePaneHeaderStyles}`}>
        <WorkspacePaneHeaderTab active={true} title='App.js' />
        <WorkspacePaneHeaderTab active={false} title='Sux.js' />
      </ul>
      <div className={`${workspacePaneHeaderControlStyles}`}>
        <button type='button' className='pt-button pt-minimal fas fa-ellipsis-h' />
        <button type='button' className='pt-button pt-minimal fas fa-columns' />
      </div>
    </div>
  );
};
