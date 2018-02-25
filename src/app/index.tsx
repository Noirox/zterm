// This is the entry point for the renderer process.
//
// Here we disable a few electron settings and mount the root component.
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RootComponent} from './root-component';
import {webFrame} from 'electron';
import {css} from 'glamor';
/**
 * CSS reset
 */
import 'glamor/reset';
import {theme} from './theme';

/**
 * Electron-focused CSS resets
 */
css.global('html, body, div#root', {
  // turn off text highlighting
  userSelect: 'none',

  // reset the cursor pointer
  cursor: 'default',

  // font
  font: 'caption',

  // text rendering
  WebkitFontSmoothing: 'subpixel-antialiased',
  textRendering: 'optimizeLegibility',

  height: '100vh',
  width: '100vw',
  overflowY: 'hidden',
  margin: 0,
  padding: 0,
  backgroundColor: 'black'
});

css.global('.pt-tab-panel', {width: '100%'});
css.global('.pt-tab-list', {marginTop: '25px'});

css.global('div#root', {
  WebkitAppRegion: 'drag',
  WebkitUserSelect: 'none',
});

css.global('::-webkit-scrollbar', {
  width: '10px'
});

css.global('::-webkit-scrollbar-track', {
  WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)'
});

css.global('::-webkit-scrollbar-thumb', {
  WebkitBoxShadow: 'inset 0 0 6px rgba(198,198,198, .3)',
  backgroundColor: '#394b59'
});

css.global('.terminal', {
  backgroundColor: theme.backgroundColor
});

css.global('tr, td', {
  lineHeight: '47px',
  maxHeight: '47px',
  height: '47px',
  minHeight: '47px',
});

/**
 * Zooming resets
 */
webFrame.setVisualZoomLevelLimits(1, 1);
webFrame.setLayoutZoomLevelLimits(0, 0);

/**
 * Drag and drop resets
 */
document.addEventListener('dragover', event => event.preventDefault());
document.addEventListener('drop', event => event.preventDefault());

// mount the root component
ReactDOM.render(<RootComponent />, document.getElementById('root'));
