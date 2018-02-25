import {css} from 'glamor';
import * as React from 'react';
import {activeTab, WorkspacePaneHeaderTab} from './WorkspacePaneHeaderTab';
import {theme} from './theme';
import {workspaceState} from './WorkspaceModel';
import {observer} from 'mobx-react';
import {ITabModel} from './TabModel';

import 'mousetrap/plugins/global-bind/mousetrap-global-bind';

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


@observer
export class WorkspacePaneHeader extends React.Component<IWorkspacePaneHeaderProps, any> {
  constructor(props: IWorkspacePaneHeaderProps) {
    super(props);
  }

  componentDidMount() {
    Mousetrap.bindGlobal('ctrl+1', this.selectTab(1), 'keydown');
    Mousetrap.bindGlobal('ctrl+2', this.selectTab(2), 'keydown');
    Mousetrap.bindGlobal('ctrl+3', this.selectTab(3), 'keydown');
    Mousetrap.bindGlobal('ctrl+4', this.selectTab(4), 'keydown');
    Mousetrap.bindGlobal('ctrl+5', this.selectTab(5), 'keydown');
    Mousetrap.bindGlobal('ctrl+6', this.selectTab(6), 'keydown');
    Mousetrap.bindGlobal('ctrl+7', this.selectTab(7), 'keydown');
    Mousetrap.bindGlobal('ctrl+8', this.selectTab(8), 'keydown');
    Mousetrap.bindGlobal('ctrl+9', this.selectTab(9), 'keydown');
    Mousetrap.bindGlobal('ctrl+0', this.selectTab(0), 'keydown');
    Mousetrap.bindGlobal('ctrl+w', this.removeActive, 'keydown');
  }

  private selectTab = (idx: any) => () => {
    if (this.props.tabs.length > 0) {
      workspaceState.panes[0].selectTabByIdx(idx);
    }
  };

  private removeActive = () => workspaceState.panes[0].closeCurrentActiveTab();

  render() {
    const {props} = this;
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
  }
}

interface IWorkspacePaneHeaderProps {
  tabs: ITabModel[]
}
