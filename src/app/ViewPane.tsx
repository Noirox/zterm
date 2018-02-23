import * as React from 'react'
import { Tab, TabId, Tabs } from '@blueprintjs/core'
import { Yate3270 } from './yate3270'
import { css } from 'glamor'

const tab = css({
  marginTop: '2px',
})

export class ViewPane extends React.Component {
  public state = {
    activeTabId: 'ca31',
  }

  render() {
    return (
      <div className='pt-card pt-elevation-2' style={{ height: '100%', paddingTop: '30px' }}>
        <Tabs id='TabsExample' className='pt-large' onChange={this.handleTabChange}>
          <Tab id='ca31' title='CA31' className={`${tab}`} panel={<Yate3270 />} />
        </Tabs>
        <Tabs.Expander />
      </div>
    )
  }

  private handleTabChange = (activeTabId: TabId) => this.setState({ activeTabId })
}
