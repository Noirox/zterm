import * as React from 'react';
import {Tab, TabId, Tabs} from '@blueprintjs/core';
import {Yate3270} from './yate3270';
import {css} from 'glamor';
import {WelcomePanel} from './WelcomePanel';

const tab = css({
  marginTop: '2px',
});

export interface IViewPaneProps {
  style: any
}

export class ViewPane extends React.Component <IViewPaneProps, {}> {
  public state = {
    activeTabId: 'ca31',
  };

  render() {
    const style = {...this.props.style, ...{height: '100%', paddingTop: '30px'}};
    return (
      <div className='pt-card pt-elevation-2' style={style}>
        <Tabs id='TabsExample' className='pt-large' onChange={this.handleTabChange}>
          <Tab id='welcome' title='WELCOME' className={`${tab}`} panel={<WelcomePanel />} />
          <Tab id='ca31' title='CA31' className={`${tab}`} panel={<Yate3270 />} />
        </Tabs>
        <Tabs.Expander />
      </div>
    );
  }

  private handleTabChange = (activeTabId: TabId) => this.setState({activeTabId});
}
