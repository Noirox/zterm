import { css } from 'glamor'
import * as React from 'react'
import { theme } from './theme'

const StatusbarStyles = css({
  backgroundColor: theme.statusbar.backgroundColor,
  width: '100vw',
  height: theme.statusbar.height,
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: theme.statusbar.zIndex,
  borderTop: theme.spacer,
})

export const Statusbar = () => {
  return <div className={`${StatusbarStyles}`} />
}
