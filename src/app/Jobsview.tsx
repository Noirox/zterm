import {TabModel} from './TabModel';
import * as React from 'react';
import {css} from 'glamor';
import {Card, Classes, CollapsibleList, EditableText, Icon, Intent, MenuItem, Spinner} from '@blueprintjs/core';
import AceEditor from 'react-ace';
import {theme} from './theme';

const JobStyle = css({
  margin: '0px',
  marginRight: '10px',
  marginBottom: '10px',
  padding: '10px 10px 0 10px',
  float: 'left',
  minWidth: '125px',
});

css.global('.inline > * ', {
  display: 'inline-block!important',
});

css.global('.pt-sm', {
  height: '20px',
  lineHeight: '20px!important',
  fontSize: '12px',
});

const jobsUrl = 'https://usilca32.ca.com:1443/zosmf/restjobs/jobs';

export class Jobsview extends React.Component {

  state = {
    jobs: [],
    jobFiles: [],
    val: '',
    selectedJob: undefined,
    loadingFiles: false,
    prefix: 'ebae*',
    owner: '*',
  };

  componentDidMount() {

  }

  getJobs = () => {
    this.setState({selectedJob: undefined, loadingFiles: true});
    fetch(`${jobsUrl}?prefix=${this.state.prefix || '*'}&owner=${this.state.owner || '*'}`)
    //mockRequest(JOB_MOCK_RESPONSE, 1000)
      .then((res) => res.json())
      .then(jobs => jobs.map(job => ({id: job.jobid, name: job.jobname, status: job.status, files: job['files-url']})))
      .then(jobs => this.setState({jobs, loadingFiles: false}));
  };

  fetchFiles = (job) => {
    this.setState({selectedJob: job, loadingFiles: true});
    fetch(job.files)
      .then((res) => res.json())
      .then(rawData => rawData.map(file =>
        ({name: file.ddname, id: file.id, records: file['records-url'], lines: file['record-count']})))
      .then(jobFiles => this.setState({jobFiles, loadingFiles: false}));
  };

  render() {

    return (
      <div style={{width: '100%', height: 'calc(100vh - 74px)', overflowY: 'auto', padding: '10px 10px 0px 10px'}}>
        <nav className='pt-navbar' style={{width: '100%', marginBottom: '20px'}}>
          <div className='pt-navbar-group pt-align-left'>
            <div className='pt-navbar-heading'>prefix=</div>
            <EditableText onConfirm={(value) => this.setState({prefix: value})} placeholder='ebae*'/>
          </div>
          <div className='pt-navbar-group pt-align-left'>
            <div className='pt-navbar-heading'>owner=</div>
            <EditableText onConfirm={(value) => this.setState({owner: value})} placeholder='*'/>
            <span className='pt-navbar-divider'/>
            <button onClick={this.getJobs} className='pt-button pt-minimal pt-icon-circle-arrow-right'/>
          </div>
        </nav>
        <div style={{height: 'calc(100vh - 155px)', width: '100%'}}>
          {this.state.loadingFiles &&
          <Spinner className={Classes.SMALL} intent={Intent.PRIMARY}/>}
          {!this.state.selectedJob &&
          this.state.jobs.map(job =>
            (<Card
              onClick={this.fetchFiles.bind(this, job)}
              key={job.id}
              className={`pt-interactive pt-elevation-1 ${JobStyle}`}
            >
              <h6 style={{color: job.status === 'ACTIVE' ? theme.textColorActive : theme.textColor}}>
                <Icon
                  icon='folder-close'
                  style={{
                    marginRight: '5px',
                  }}
                />
                {job.name}
              </h6>
              <p style={{color: job.status === 'ACTIVE' ? 'rgb(19,124,189)' : theme.textColor}}>{job.status}</p>
            </Card>),
          )}

          {(this.state.selectedJob && this.state.jobFiles) &&
          <FileList
            jobs={this.state.jobs}
            selectedJob={this.state.selectedJob}
            jobFiles={this.state.jobFiles}
            onChangeJob={(job) => this.fetchFiles(job)}
            onUnselectJob={() => this.setState({selectedJob: undefined, jobFiles: []})}
          />
          }
        </div>
      </div>
    );
  }

}

interface IFileListProps {
  jobs: any[]
  selectedJob: any
  jobFiles: any[]
  onChangeJob?: any
  onUnselectJob?: any
}

class FileList extends React.Component <IFileListProps, any> {

  state = {
    content: undefined,
    loading: false,
  };

  fetchContent = (file) => {
    this.setState({content: undefined, loading: true});
    const start = Math.max(file.lines - 200, 0);
    fetch(file.records, {
      headers: {
        'X-IBM-Record-Range': `${start}-${file.lines}`,
      },
    })
      .then(res => res.text())
      .then(txt => this.setState({content: txt, loading: true}));
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.props.selectedJob &&
          <BreadcrumbsOfJobs
            jobs={this.props.jobs}
            selectedJob={this.props.selectedJob}
            changeJob={(job) => {
              this.setState({content: undefined});
              this.props.onChangeJob(job);
            }}
          />
          }
          <button className='pt-button pt-minimal pt-icon-refresh'
                  onClick={() => this.props.onChangeJob(this.props.selectedJob)}/>
          <button
            className='pt-button pt-minimal pt-icon-arrow-left'
            style={{float: 'right'}}
            onClick={() => this.props.onUnselectJob()}
          />
        </div>
        {this.props.jobFiles.map(file =>
          <Card
            key={file.id}
            className={`pt-elevation-1 pt-interactive ${JobStyle}`}
            onClick={() => this.fetchContent(file)}
          >
            <h6><Icon icon='document' style={{marginRight: '7px'}}/>{file.name}</h6>
            <p>lines: {file.lines}</p>
          </Card>,
        )}
        {this.state.loading && !this.state.content &&
        <Spinner className={Classes.SMALL} intent={Intent.PRIMARY}/>}
        {this.state.content &&
        <FileContent content={this.state.content}/>
        }
      </React.Fragment>
    );
  }

}

const BreadcrumbsOfJobs = ({selectedJob, jobs, changeJob}) => {
  console.log('wtfff');
  return (
    <CollapsibleList
      className={Classes.BREADCRUMBS}
      dropdownTarget={<span className={Classes.BREADCRUMBS_COLLAPSED}/>}
      visibleItemRenderer={VisibleItem}
      visibleItemCount={1}
    >
      {jobs.filter(job => job.id !== selectedJob.id).map(job =>
        <MenuItem icon='folder-close' onClick={() => changeJob(job)} key={job.id} text={job.name} href='#'/>,
      )}
      <MenuItem icon='folder-close' text={selectedJob.name} href='#'/>
    </CollapsibleList>);
};

const FileContent = ({content}: {content: string}) => {
  return (
    <div>
      <AceEditor
        width={'100%'}
        mode='text'
        value={content}
        theme='solarized_dark'
        name='UNIQUE_ID_OF_DIV'
        editorProps={{$blockScrolling: true}}
      />
    </div>
  );
};


const VisibleItem = ({text}) =>
  <span className={`${Classes.BREADCRUMB}, ${Classes.BREADCRUMB_CURRENT}`}>{text}</span>;

export const JobsviewTab = new TabModel({title: 'Jobs view', id: 'jobsview', content: <Jobsview/>});
