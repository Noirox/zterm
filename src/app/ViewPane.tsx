import * as React from 'react';
import {Tab, TabId, Tabs} from '@blueprintjs/core';

export class ViewPane extends React.Component {
  public state = {
    activeTabId: "ng",
  };

  render() {
    return (
      <div className='pt-card' style={{height: '100%'}}>
        <Tabs id="TabsExample" className='pt-large' onChange={this.handleTabChange}>
          <Tab id="ng" title="Angular" className='hmm' panel={<div style={{height: '100%', border: '1px solid red'}}>Ax</div>} />
          <Tab id="mb" title="Ember" panel={<div>E</div>} />
          <Tab id="rx" title="React" panel={<div>R</div>} />
          <Tab id="bb" disabled title="Backbone" panel={<div>B</div>} />
        </Tabs>
        <Tabs.Expander />
      </div>
    );
  }

  private handleTabChange = (activeTabId: TabId) => this.setState({activeTabId});
}
