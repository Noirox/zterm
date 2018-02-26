import {TabModel} from './TabModel'
import * as React from 'react'

export class Jobsview extends React.Component {

  componentDidMount() {
    fetch('https://usilca32.ca.com:1443/zosmf/restjobs/jobs?prefix=EBAE*&owner=*',
      {
        headers: {
          'cookie': '',
        },
      })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div>jobsview</div>
    )
  }
}

export const JobsviewTab = new TabModel({title: 'Jobs view', id: 'jobsview', content: <Jobsview/>})
