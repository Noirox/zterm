import * as React from 'react';
import {yateIconStyles} from './WelcomePanel.styles';

export class WelcomePanel extends React.Component {
  render() {
    return (
      <div className={`${yateIconStyles.wrapper}`}>
        <div className={`${yateIconStyles.icon}`} />
        <div className={`${yateIconStyles.title}`}>YATE3270</div>
      </div>
    );
  }
}
