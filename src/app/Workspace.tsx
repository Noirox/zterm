import {css} from 'glamor';
import {theme} from './theme';
import * as React from 'react';
import {WorkspacePane} from './WorkspacePane';
import {workspaceState} from './WorkspaceModel';

const workspaceStyles = css({
  width: '100vw',
  height: '100vh',
  boxSizing: 'border-box',
  overflow: 'hidden',
  marginLeft: theme.sideNavbar.width,
  backgroundColor: theme.workspace.backgroundColor,
  color: theme.textColorActive,
});

export const Workspace = () => {
  return (
    <div className={`${workspaceStyles}`}>
      {workspaceState.panes.map(pane =>
        <WorkspacePane tabs={pane.tabs} key={'1'} />)
      }
    </div>
  );
};


