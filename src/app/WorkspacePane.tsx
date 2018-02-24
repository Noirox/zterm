import * as React from 'react';
import {css} from 'glamor';
import {WorkspacePaneHeader} from './WorkspacePaneHeader';
import {WorkspacePaneBody} from './WorkspacePaneBody';

const workspacePaneStyles = css({});
export const WorkspacePane = () => {
  return (
    <div className={`${workspacePaneStyles}`}>
      <WorkspacePaneHeader />
      <WorkspacePaneBody />
    </div>
  );
};
