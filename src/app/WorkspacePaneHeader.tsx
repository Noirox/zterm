import {css} from 'glamor';
import * as React from 'react';
import {WorkspacePaneHeaderTab} from './WorkspacePaneHeaderTab';
import {theme} from './theme';

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
  borderBottom: '1px solid black'
});

const workspacePaneHeaderControlStyles = css({
  position: 'absolute',
  right: '15px',
  top: 0,
  height: '50px',
  display: 'flex',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  zIndex: 2000,
  color: '#727781',
  '>i': {
    marginLeft: '10px'
  }
});

export const WorkspacePaneHeader = () => {
  return (
    <div>
      <ul className={`${workspacePaneHeaderStyles}`}>
        <WorkspacePaneHeaderTab active={true} title='App.js' />
        <WorkspacePaneHeaderTab active={false} title='Sux.js' />
      </ul>
      <div className={`${workspacePaneHeaderControlStyles}`}>
        <i className='fas fa-ellipsis-h' />
        <i className='fas fa-columns' />
      </div>
    </div>
  );
};
