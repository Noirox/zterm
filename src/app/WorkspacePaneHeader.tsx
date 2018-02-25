import {css} from 'glamor';
import * as React from 'react';
import {activeTab, WorkspacePaneHeaderTab} from './WorkspacePaneHeaderTab';
import {theme} from './theme';
import {workspaceState} from './WorkspaceModel';
import {observer} from 'mobx-react';
import {ITabModel} from './TabModel';

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

export const WorkspacePaneHeader = observer((props) => {
  return (
    <div style={{backgroundColor: theme.backgroundColorBase}}>
      <ul className={`${workspacePaneHeaderStyles}`}>
        {props.tabs.map((tab: ITabModel) =>
          <WorkspacePaneHeaderTab
            key={tab.id}
            tab={tab}
            active={tab.id === workspaceState.panes[0].active.id ? activeTab : null}
            onActivate={(e: React.SyntheticEvent<any>) => {
              e.preventDefault();
              e.stopPropagation();
              workspaceState.panes[0].setActiveTab(tab);
              return false;
            }}
            onClose={(e: React.SyntheticEvent<any>) => {
              e.preventDefault();
              e.stopPropagation();
              workspaceState.panes[0].removeTab(tab);
              return false;
            }}
          />
        )}
      </ul>
      <div className={`${workspacePaneHeaderControlStyles}`}>
        <button type='button' className='pt-button pt-minimal fas fa-ellipsis-h' />
        <button type='button' className='pt-button pt-minimal fas fa-columns' />
      </div>
    </div>
  );
});
