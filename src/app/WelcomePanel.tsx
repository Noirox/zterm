import {cssProps} from '../views/theme';
import * as React from 'react';
import {yateIconStyles} from './WelcomePanel.styles';
import {css} from 'glamor';
import {Switch} from '@blueprintjs/core';

const {shell} = require('electron');

const subtitle = cssProps({
  textAlign: 'center',
  marginLeft: '55px',
  marginTop: 0,
  fontFamily: `'Raleway', sans-serif`,
});

const link = css({
  ':hover': {
    textDecoration: 'none',
    color: 'green',
  }
});

export class WelcomePanel extends React.Component {
  state = {
    showWelcome: true
  };

  handlePublicChange = () => this.setState({showWelcome: !this.state.showWelcome});

  render() {
    const {showWelcome} = this.state;
    return (
      <div>
        <a className={`${link}`} onClick={() => shell.openExternal('https://github.com/Noirox/zterm')}>
          <div className={`${yateIconStyles.wrapper}`}>
            <div className={`${yateIconStyles.icon}`} />
            <div className={`${yateIconStyles.title}`}>YATE-3270-</div>
            <h3 style={subtitle}>Yet Another Terminal Emulator -3270-</h3>
          </div>
        </a>
        <ul style={{margin: 0, padding: 0, listStyle: 'none'}}>
          <li style={{margin: '25px 40%'}}>
            <button type="button" className='pt-button pt-minimal  pt-icon-add pt-fill'>Start new session</button>
          </li>
          <li style={{margin: '50px 0 50px 38%'}}>
            <Switch
              checked={showWelcome}
              label="Show welcome page when opening YATE-3270-"
              onChange={this.handlePublicChange}
            />
          </li>
        </ul>
      </div>
    );
  }
}
