// This is the top-most component in the app.
import * as React from 'react';
import * as Mousetrap from 'mousetrap';
import {cssProps} from '../views/theme';
import {css} from 'glamor';
import {theme} from './theme';
import {SideNavbar} from './SideNavbar';
import {Statusbar} from './Statusbar';
import {Workspace} from './Workspace';
import {SidePane} from './sidepane';
import 'mousetrap/plugins/global-bind/mousetrap-global-bind';

const OVERLAY = css({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  WebkitTransition: 'all 0.3s ease-in-out',
  backgroundColor: '#343436',
  opacity: 0,
  visibility: 'hidden',
});


const OVERLAY_SHOW = cssProps({
  opacity: 0.555,
  visibility: 'visible',
});


const AppWrapper = css({
  height: '100%',
  width: '100%',
  backgroundColor: theme.backgroundColor,
  fontFamily: theme.bodyFontFamily,
  overflow: 'hidden',
  minHeight: '400px'
});

export class RootComponent extends React.Component<{}, {}> {
  state = {
    show: false,
  };

  toggle() {
    this.setState({show: !this.state.show});
  }

  constructor(props: any) {
    super(props);
    Mousetrap.reset();
    Mousetrap.bindGlobal('f4', this.toggle.bind(this), 'keydown');
  }

  render() {
    return (
      <div className={`${AppWrapper}`}>
        <SideNavbar />
        <SidePane show={this.state.show} />
        <Workspace />
        <Statusbar />
        <div onClick={this.toggle.bind(this)} className={`${OVERLAY}`} style={this.state.show ? OVERLAY_SHOW : null} />
      </div>
    );
  }
}
