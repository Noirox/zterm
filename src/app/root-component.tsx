// This is the top-most component in the app.
import * as React from 'react'
import { compose } from 'glamor'
import { colors, styles } from '../views/theme'
import { Mosaic, MosaicWindow } from 'react-mosaic-component'

import './react-mosaic-component.css'

const ROOT = compose(styles.fullScreen, {
  background: colors.window.background,
  '& ::-webkit-scrollbar': { backgroundColor: colors.scrollbar.base, width: 12, height: 12 },
  '& ::-webkit-scrollbar-track': { backgroundColor: colors.scrollbar.track },
  '& ::-webkit-scrollbar-thumb': { backgroundColor: colors.scrollbar.thumb, borderRadius: 4 },
})

export type ViewId = 'a' | 'b' | 'c' | 'new'

// Make a simple extension class to preserve generic type checking in TSX
class ViewIdMosaic extends Mosaic<ViewId> {}

class ViewIdMosaicWindow extends MosaicWindow<ViewId> {}

const TITLE_MAP: Record<ViewId, string> = {
  a: 'Left Window',
  b: 'Top Right Window',
  c: 'Bottom Right Window',
  new: 'New Window',
}

export class RootComponent extends React.Component<{}, {}> {
  render() {
    return (
      <ViewIdMosaic
        renderTile={(id, path) => (
          <ViewIdMosaicWindow path={path} createNode={() => 'new'} title={TITLE_MAP[id]}>
            <h1>{TITLE_MAP[id]}</h1>
          </ViewIdMosaicWindow>
        )}
        initialValue={{
          direction: 'row',
          first: 'a',
          second: {
            direction: 'column',
            first: 'b',
            second: 'c',
          },
        }}
      />
    )
  }
}
