import {css} from 'glamor';
import {Card, Icon} from '@blueprintjs/core';
import * as React from 'react';

export interface IJESJob {
  status: string
  statusDetail: string;
  name: string
  id: string
  filesUrl: string
}

const JobStyle = css({
  margin: '0px',
  marginRight: '10px',
  marginBottom: '10px',
  padding: '10px 10px 0 10px',
  float: 'left',
  minWidth: '125px',
});
export const JESJob = ({job, titleColor, statusColor}) => {
  return (
    <Card className={`pt-interactive pt-elevation-1 ${JobStyle}`}>
      <h6 style={{color: titleColor}}>
        <Icon icon='folder-close' style={{marginRight: '5px'}} />
        {job.name}
      </h6>
      <p style={{color: statusColor}}>
        {job.status}
      </p>
    </Card>
  );
};
