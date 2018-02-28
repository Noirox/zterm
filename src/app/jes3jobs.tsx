import * as React from 'react';
import {computed, observable} from 'mobx';
import {observer} from 'mobx-react';
import {IJESJob, JESJob} from './JESJob';
import {theme} from './theme';

// job entry subsystem

export interface IJESJobsProps {
  jobs: IJESJob[]
}

export interface IJESJobFile {
  name: string,
  id: string,
  recordsUrl: string
}

const byActiveStatus = (job: IJESJob): boolean => job.status === 'ACTIVE';
const byNotActiveStatus = (job: IJESJob): boolean => job.status !== 'ACTIVE';

export class JESJobsStore {
  @observable
  fetchInProgress: boolean = false;

  @observable
  jobs: IJESJob[] = [
    {
      status: 'ACTIVE',
      statusDetail: 'fu',
      name: 'omnfg',
      id: 'omfg',
      filesUrl: 'fu',
    }, {
      status: 'ACTIVE',
      statusDetail: 'fu',
      name: 'omnfg',
      id: 'omfg3',
      filesUrl: 'fu',
    },
    {
      status: 'XX',
      statusDetail: 'fu',
      name: 'omnfg',
      id: 'omfg1',
      filesUrl: 'fu',
    }];

  @observable
  selectedJob: IJESJob | undefined = undefined;

  @observable
  selectedJobFiles: IJESJobFile[] = [];

  @observable
  owner: string = '*';

  @observable
  prefix: string = '*';

  @observable
  lastUpdateDateTime: string = '';

  @computed
  get activeJobs(): IJESJob[] {
    return this.jobs.filter(byActiveStatus);
  }

  @computed
  get otherJobs(): IJESJob[] {
    return this.jobs.filter(byNotActiveStatus);
  }
}

const jesJobStore = new JESJobsStore();

@observer
export class JES3Jobs extends React.Component <IJESJobsProps, any> {

  render() {
    return (
      <React.Fragment>
        {jesJobStore.activeJobs.map(this.renderActiveJob)}
        <div style={{width: '100%', height: '100px'}} />
        {jesJobStore.otherJobs.map(this.renderOtherJob)}
      </React.Fragment>
    );
  }

  private renderActiveJob = (job: IJESJob) =>
    <JESJob key={job.id} job={job} statusColor='rgb(19,124,189)' titleColor={theme.textColorActive} />;

  private renderOtherJob = (job: IJESJob) =>
    <JESJob key={job.id} job={job} statusColor={theme.textColor} titleColor={theme.textColor} />;

}







