import {css} from 'glamor';
import * as React from 'react';

const workspacePaneBodyStyles = css({
  height: '100vh',
  width: '100vw',
  position: 'absolute',
  left: 0,
  top: 0,
  margin: '50px 0 0 50px',
  backgroundColor: '#2B303B',
  padding: '5px',
  //borderTop: '1px solid black'
});
export const WorkspacePaneBody = () => {
  return (
    <div className={`${workspacePaneBodyStyles}`}>
      body
    </div>
  );
};
