import * as React from 'react';
import {css} from 'glamor';
import {WorkspacePaneHeader} from './WorkspacePaneHeader';
import {WorkspacePaneBody} from './WorkspacePaneBody';
import {theme} from './theme';
import {observer} from 'mobx-react';
import {ITabModel} from './WorkspaceModel';

const workspacePaneStyles = css({
  height: `calc(100vh - ${theme.statusbar.height})`,
  width: `calc(100vw - ${theme.sideNavbar.width})`,
  boxSizing: 'border-box',
  overflow: 'hidden',
  margin: 0,
  backgroundColor: theme.backgroundColor,
  color: theme.textColorActive,
});

export const WorkspacePane = observer((props: IWorkspacePaneProps) => {
  return (
    <div className={`${workspacePaneStyles}`}>
      <WorkspacePaneHeader tabs={props.tabs} activeTab={props.activeTab}/>
      <WorkspacePaneBody>
      </WorkspacePaneBody>
    </div>
  );
});

export interface IWorkspacePaneProps {
  tabs: any[]
  activeTab: ITabModel
}
