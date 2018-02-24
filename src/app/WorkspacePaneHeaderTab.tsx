import {css} from 'glamor';
import * as React from 'react';

const workspacePaneHeaderTabStyles = css({
  width: '150px',
  height: '50px',
  backgroundColor: '#21252D',
  display: 'flex',
  alignItems: 'center',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
  fontWeight: '600',
  borderRight: '1px solid black',
  borderBottom: '1px solid black',
  color: '#7d7d7d',
  transition: '.333s',
  cursor: 'pointer',
  ':hover': {
    color: 'whitesmoke',
    '>.pt-button': {
      transition: '.555s',
      color: '#d4d4d4',
    }
  },
  '>.pt-button:hover': {
    color: 'whitesmoke',
    backgroundColor: '#0f4987'
  },
  '>span': {
    padding: '10px',
    width: '105px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
});
const active = css({
  backgroundColor: '#2B303B',
  borderBottom: '1px solid #2B303B',
  color: 'whitesmoke',
  cursor: 'default'
});
export const WorkspacePaneHeaderTab = (props: any) => {
  return (
    <li className={`${workspacePaneHeaderTabStyles} ${props.active ? active : ''}`}>
      <span>{props.title}</span>
      <button type="button" className='pt-button pt-minimal fas fa-times' />
    </li>
  );
};