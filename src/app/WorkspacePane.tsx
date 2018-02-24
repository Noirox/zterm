import * as React from 'react';
import {css} from 'glamor';
import {WorkspacePaneHeader} from './WorkspacePaneHeader';
import {WorkspacePaneBody} from './WorkspacePaneBody';
import {theme} from './theme';

const workspacePaneStyles = css({
  width: '100vw',
  height: '100vh',
  boxSizing: 'border-box',
  overflow: 'hidden',
  margin: 0,
  backgroundColor: theme.backgroundColor,
  color: theme.textColorActive,
});
export const WorkspacePane = () => {
  return (
    <div className={`${workspacePaneStyles}`}>
      <WorkspacePaneHeader />
      <WorkspacePaneBody />
    </div>
  );
};
