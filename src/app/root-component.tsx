// This is the top-most component in the app.
import * as React from 'react';
import './main.css';
import {ViewPane} from './viewpane';
import {SidePane} from './sidepane';
import * as Mousetrap from 'mousetrap';
import {cssProps} from '../views/theme';
import {css} from 'glamor';

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
    Mousetrap.bind('f4', this.toggle.bind(this), 'keydown');
  }

  render() {
    return (
      <div style={{padding: '5px', height: '100vh'}}>
        <SidePane show={this.state.show} />
        <div onClick={this.toggle.bind(this)} className={`${OVERLAY}`} style={this.state.show ? OVERLAY_SHOW : null} />
        <ViewPane style={this.state.show ? { transform: 'scale(0.9751)'} : null}/>
      </div>
    );
  }
}
