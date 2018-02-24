import {css} from 'glamor';
import * as React from 'react';
import {theme} from './theme';

const workspacePaneBodyStyles = css({
  height: `calc(100vh - (${theme.statusbar.height} + ${theme.workspace.header.height}))`,
  width: `calc(100vw - ${theme.sideNavbar.width})`,
  position: 'absolute',
  left: 0,
  top: 0,
  margin: `${theme.workspace.header.height} 0 0 ${theme.sideNavbar.width}`,
  backgroundColor: theme.backgroundColor,
  padding: '5px',
});

export const WorkspacePaneBody = (props: { panel: JSX.Element }) => {
  const {panel} = props;
  return (
    <div className={`${workspacePaneBodyStyles}`}>
      {panel}
    </div>
  );
};
