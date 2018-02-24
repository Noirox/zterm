import {css} from 'glamor';
import * as React from 'react';
import {theme} from './theme';
import {ITabModel} from './WorkspaceModel';

const workspacePaneHeaderTabStyles = css({
  width: '150px',
  height: theme.workspace.header.height,
  backgroundColor: theme.backgroundColorBase,
  display: 'flex',
  alignItems: 'center',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
  fontWeight: '600',
  borderRight: theme.spacer,
  borderBottom: theme.spacer,
  color: theme.textColor,
  transition: theme.transitionTime,
  cursor: 'pointer',
  ':hover': {
    color: `${theme.workspace.header.color}`,
    '>.pt-button': {
      transition: theme.transitionTime,
      color: `${theme.workspace.header.color}`,
    },
  },
  '>.pt-button:hover': {
    color: `${theme.workspace.header.color}`,
    // backgroundColor: '#0f4987'
  },
  '>span': {
    padding: '10px',
    width: '105px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export const activeTab = css({
  backgroundColor: theme.backgroundColor,
  borderBottom: `1px solid ${theme.backgroundColor}`,
  borderLeft: `2px solid ${theme.workspace.header.activeTabBarColor}`,
  color: `${theme.workspace.header.color}`,
  cursor: 'default',
});

export class WorkspacePaneHeaderTab extends React.Component<IHeaderTabProps, {}> {

  shouldComponentUpdate(nextProps: IHeaderTabProps) {
    return nextProps.active !== this.props.active;
  }

  render() {
    const {onActivate, onClose, active, tab} = this.props;
    return (
      <li
        onClick={onActivate}
        className={`${workspacePaneHeaderTabStyles} ${active}`}
      >
        <span>{tab.title}</span>
        <button onClick={onClose} type='button' className='pt-button pt-minimal fas fa-times' />
      </li>
    );
  }
}

export interface IHeaderTabProps {
  active: any
  onActivate: any
  onClose: any
  tab: ITabModel
}
