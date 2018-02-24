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
  borderBottom: '1px solid black'
});
export const WorkspacePaneHeader = () => {
  return (
    <ul className={`${workspacePaneHeaderStyles}`}>
      <WorkspacePaneHeaderTab active={true} title='App.js' />
      <WorkspacePaneHeaderTab active={false} title='Sux.js' />
    </ul>
  );
};
