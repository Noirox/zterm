import {TabModel} from './TabModel';
import * as React from 'react';
import {css} from 'glamor';
import AceEditor from 'react-ace';
import 'brace/theme/monokai';
import {theme} from './theme';

const JobsStyle = css({
  borderRight: '1px solid rgba(55,53,112,.08)',
  WebkitBoxShadow: '1px 0 3px rgba(55,53,112,.08)',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  width: '100%',
  fontSize: '1.25em',
  lineHeight: '1.4',
  color: '#9da5b4',
});

const JobStyle = css({
  background: '#2f333d',
  backgroundClip: 'padding-box',
  border: '1px solid #181a1f',
  cursor: 'pointer',
  display: 'block',
  margin: '.5em',
  padding: '2px 7px 2px 7px',
  maxWidth: '310px',
  '> h6': {
    fontSize: '1rem',
    lineHeight: '1.4',
    color: '#9da5b4',
  },
});

export class Jobsview extends React.Component {

  render() {
    return (
      <div>
        <header style={{height: '60px'}}>
          header
        </header>
        <aside
          style={{position: 'absolute', top: '60px', bottom: '5px', left: '5px', overflowY: 'auto', width: '340px'}}>
          <input
            style={{width: '310px', display:'block', margin: '.7em'}}
            className='pt-input'
            type='text'
            placeholder='Search for jobs...'
          />
          <div style={{marginLeft: '0px', height: '1px', width: '335px', borderBottom: theme.spacer, marginBottom: '10px'}} />
          <ul className={`${JobsStyle}`}>
            <li className={`${JobStyle}`}><h6>EBAA</h6></li>
            <li className={`${JobStyle}`}><h6>EBAB</h6></li>
            <li className={`${JobStyle}`}><h6>EBAC</h6></li>
            <li className={`${JobStyle}`}><h6>EBAD</h6></li>
            <li className={`${JobStyle}`}><h6>EBAE</h6></li>
            <li className={`${JobStyle}`}><h6>EBAF</h6></li>
            <li className={`${JobStyle}`}><h6>EBAG</h6></li>
            <li className={`${JobStyle}`}><h6>EBAH</h6></li>
            <li className={`${JobStyle}`}><h6>EBAI</h6></li>
            <li className={`${JobStyle}`}><h6>EBAJ</h6></li>
            <li className={`${JobStyle}`}><h6>EBAK</h6></li>
            <li className={`${JobStyle}`}><h6>EBAL</h6></li>
            <li className={`${JobStyle}`}><h6>EBAM</h6></li>
            <li className={`${JobStyle}`}><h6>EBAN</h6></li>
          </ul>
        </aside>
        <section
          style={{position: 'absolute', left: '345px', top: '60px', minWidth: '550px', right: '5px', bottom: '5px'}}>
          <AceEditor
            height='100%'
            width={'100%'}
            mode='javascript'
            value={'xxxx'}
            theme='monokai'
            name='UNIQUE_ID_OF_DIV'
            editorProps={{$blockScrolling: true}}
          />
        </section>
      </div>
    );
  }
}

export const JobsviewTab = new TabModel({title: 'Jobs view', id: 'jobsview', content: <Jobsview />});
