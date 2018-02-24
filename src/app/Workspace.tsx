import {css} from 'glamor';
import {theme} from './theme';
import * as React from 'react';

const workspaceStyles = css({
  width: '100vw',
  height: '100vh',
  boxSizing: 'border-box',
  overflow: 'hidden',
  marginLeft: theme.sideNavbar.width,
  backgroundColor: theme.workspace.backgroundColor,
  color: 'whitesmoke'
});
export const Workspace = (props: any) => {
  return (
    <div className={`${workspaceStyles}`}>
      {props.children}
    </div>
  );
};
