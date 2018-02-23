import * as React from 'react'
import {css} from 'glamor'
import {cssProps} from '../views/theme'

const SIDEBAR = css({
  backgroundColor: '#2a2a2a',
  position: 'fixed',
  zIndex: 9,
  top: 0,
  right: 0,
  height: '100vh',
  maxWidth: '60%',
  width: '100vh',
  padding: '5px',
  overflowY: 'auto',
  WebkitTransform: 'translateX(100%)',
  WebkitTransition: 'transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  color: ' #ffffff',
  fontFamily: '"Raleway", sans-serif',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: '1.5rem',
  letterSpacing: '5px',
  fontWeight: '600',
  //boxShadow: 'inset 0 0 4px #797979',
  border: '1px solid #797979',
})

const SHOW = cssProps({
  WebkitTransform: 'translateX(0px)',
})

export interface ISideviewProps {
  show: boolean
}

export class Sideview extends React.Component<ISideviewProps, {}> {

  constructor(props: any) {
    super(props)
    console.log('not called?')
  }

  render() {
    return (<div className={`${SIDEBAR}`} style={this.props.show ? SHOW : null}>component</div>)
  }
}

