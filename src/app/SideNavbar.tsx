import {css} from 'glamor';
import * as React from 'react';
import {theme} from './theme';

const SideNavbarStyles = css({
  listStyle: 'none',
  height: '100vh',
  width: theme.sideNavbar.width,
  padding: 0,
  margin: 0,
  paddingTop: theme.workspace.header.height,
  zIndex: theme.sideNavbar.zIndex,
  position: 'absolute',
  left: 0,
  top: 0,
  minHeight: '400px',
  backgroundColor: theme.sideNavbar.backgroundColor,
  borderRight: theme.spacer,
  '>li': {
    color: theme.sideNavbar.color,
    fontSize: '1.7rem',
    width: theme.sideNavbar.width,
    zIndex: theme.sideNavbar.zIndex,
    cursor: 'pointer',
    textAlign: 'center',
    transition: theme.transitionTime,
    marginBottom: '25px',
    ':hover': {
      color: theme.textColorActive,
    },
  },
  '>li.setting': {
    position: 'absolute',
    bottom: '40px',
    left: 0,
    //animation: `${spinAnim} 10.5s linear infinite`
  },
});
export const SideNavbar = () => {
  return (
    <ol className={`${SideNavbarStyles}`}>
      <li className='fas fa-copy' />
      <li className='fas fa-search' />
      <li className='fas fa-code-branch' />
      <li className='fas fa-bug' />
      <li className='fas fa-external-link-square-alt' />
      <li className='fas fa-cog setting' />
    </ol>
  );
};
