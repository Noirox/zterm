import {css} from 'glamor';
import * as React from 'react';
import {theme} from './theme';

const StatusbarStyles = css({
  backgroundColor: theme.statusbar.backgroundColor,
  width: '100vw',
  display: 'flex',
  height: theme.statusbar.height,
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: theme.statusbar.zIndex,
  borderTop: theme.spacer,
  padding: '2px',
  color: theme.textColor,
  fontSize: '16px',
  fontWeight: '600',
});

const left = css({
  width: '50vw',
  marginLeft: '10px',
});

const right = css({
  width: '50vw',
  marginRight: '10px',
  textAlign: 'right'
});

export const Statusbar = () => {
  return (
    <div className={`${StatusbarStyles}`}>
      <div className={`${left}`}>statusbar - left part</div>
      <div className={`${right}`}>statusbar - right part</div>
    </div>
  );
};
