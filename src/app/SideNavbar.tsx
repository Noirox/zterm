import {css, keyframes} from 'glamor';
import * as React from 'react';
import {theme} from './theme';
import {workspaceState} from './WorkspaceModel';
import {observer} from 'mobx-react';
import {SettingsTab} from './Settings';
import {TerminalTab} from './yate3270';
import {JobsviewTab} from './Jobsview'

const spinAnim = keyframes({
  '0%': {
    WebkitTransform: 'rotate(0)',
    transform: 'rotate(0)'
  },
  '100%': {
    WebkitTransform: 'rotate(359deg)',
    transform: 'rotate(359deg)',
  }
});

const SideNavbarStyles = css({
  listStyle: 'none',
  height: '100vh',
  width: theme.sideNavbar.width,
  padding: 0,
  margin: 0,
  paddingTop: `calc(${theme.workspace.header.height} - 1px)`,
  zIndex: theme.sideNavbar.zIndex,
  position: 'absolute',
  left: 0,
  top: 0,
  minHeight: '400px',
  backgroundColor: theme.sideNavbar.backgroundColor,
  borderRight: theme.spacer,
  '>li': {
    color: theme.sideNavbar.color,
    fontSize: '1.1rem',
    width: theme.sideNavbar.width,
    zIndex: theme.sideNavbar.zIndex,
    cursor: 'pointer',
    textAlign: 'center',
    transition: theme.transitionTime,
    paddingBottom: '15px',
    paddingTop: '15px',
    borderTop: `1px solid ${theme.sideNavbar.backgroundColor}`,
    borderBottom: `1px solid ${theme.sideNavbar.backgroundColor}`,
    borderLeft: `3px solid ${theme.sideNavbar.backgroundColor}`,
    ':hover': {
      color: theme.textColorActive,
    },
  },
  '>li.setting': {
    position: 'absolute',
    bottom: '40px',
    left: 0,
    padding: '10px'
    //animation: `${spinAnim} 10.5s linear infinite`
  },
});

export const SideNavbar = observer(() => {
  return (
    <ol className={`${SideNavbarStyles}`}>
      <li
        className='fas fa-terminal'
        onClick={() => {
          workspaceState.panes[0].addTab(TerminalTab);
        }}
        style={workspaceState.panes[0].active && workspaceState.panes[0].active.id === 'terminal' ? {
          color: theme.textColorActive,
          backgroundColor: theme.backgroundColor,
          borderTop: theme.spacer,
          borderBottom: theme.spacer,
          borderLeft: '3px solid black',
        } : {}}
      />
      <li className='fas fa-copy' />
      <li className='fas fa-search' />
      <li
        className='fas fa-code-branch'
        onClick={() => {
          workspaceState.panes[0].addTab(JobsviewTab)
        }}
        style={workspaceState.panes[0].active && workspaceState.panes[0].active.id === 'jobsview' ? {
          color: theme.textColorActive,
          backgroundColor: theme.backgroundColor,
          borderTop: theme.spacer,
          borderBottom: theme.spacer,
          borderLeft: '3px solid black',
        } : {}}
      />
      <li className='fas fa-bug' />
      <li className='fas fa-external-link-square-alt' />
      <li className='setting'
          style={workspaceState.panes[0].active && workspaceState.panes[0].active.id === 'settings' ? {
            color: theme.textColorActive,
            backgroundColor: theme.backgroundColor,
            borderTop: theme.spacer,
            borderBottom: theme.spacer,
            borderLeft: '3px solid black',
          } : {}}
          onClick={() => {
            workspaceState.panes[0].addTab(SettingsTab);
          }}>
        <i className='fas fa-cog'
           style={workspaceState.panes[0].active && workspaceState.panes[0].active.id === 'settings' ? {
             animation: `${spinAnim} 3.5s linear infinite`,
             animationPlayState: 'running'
           } : {
             animation: `${spinAnim} 3.5s linear infinite`,
             animationPlayState: 'paused',
           }
           } />
      </li>
    </ol>
  );
});
