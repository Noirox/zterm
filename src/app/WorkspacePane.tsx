import * as React from 'react';
import {css} from 'glamor';
import {WorkspacePaneHeader} from './WorkspacePaneHeader';
import {WorkspacePaneBody} from './WorkspacePaneBody';
import {theme} from './theme';
import {workspaceState} from './WorkspaceModel';
import {observer} from 'mobx-react';


const workspacePaneStyles = css({
  height: `calc(100vh - ${theme.statusbar.height})`,
  width: `calc(100vw - ${theme.sideNavbar.width})`,
  boxSizing: 'border-box',
  overflow: 'hidden',
  margin: 0,
  backgroundColor: theme.backgroundColorBase,
  color: theme.textColorActive,
});

export const WorkspacePane = observer((props: IWorkspacePaneProps) => {
  return (
    <div className={`${workspacePaneStyles}`}>
      <WorkspacePaneHeader tabs={props.tabs} />
      {workspaceState.panes[0].active && workspaceState.panes[0].active.content &&
        <WorkspacePaneBody panel={workspaceState.panes[0].active.content} />
      }
    </div>
  );
});

export interface IWorkspacePaneProps {
  tabs: any[]
}
