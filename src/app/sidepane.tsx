import * as React from 'react';
import {css} from 'glamor';
import {cssProps} from '../views/theme';
import AceEditor from 'react-ace';
import * as Mousetrap from 'mousetrap';

import 'brace/mode/java';
import 'brace/theme/solarized_dark';

const SIDEBAR = css({
  backgroundColor: '#2a2a2a',
  position: 'fixed',
  zIndex: 1001,
  top: 0,
  right: 0,
  height: '100vh',
  maxWidth: '60%',
  width: '100vh',
  padding: '5px',
  overflowY: 'auto',
  WebkitTransform: 'translateX(100%)',
  WebkitTransition: 'transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  color: '#ffffff',
  fontFamily: `'Raleway', sans-serif`,
  textDecoration: 'none',
  // textTransform: 'uppercase',
  fontSize: '1.5rem',
  // letterSpacing: '5px',
  fontWeight: '600',
  //boxShadow: 'inset 0 0 4px #797979',
  border: '1px solid #797979',
});

const SIDEBAR_TITLE = css({
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: '600',
  color: '#ffffff',
  fontFamily: `'Raleway', sans-serif`,
  textDecoration: 'none',
  fontSize: '1.5rem',
  lineHeight: '1.5rem',
  height: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  margin: '0.85rem 0 0.85rem 0',
});

const SHOW = cssProps({
  WebkitTransform: 'translateX(0px)',
});

export interface ISideviewProps {
  show?: boolean,
  code?: string
}

export class SidePane extends React.Component<ISideviewProps, {}> {

  state = {
    code: 'const electron = require(\'electron\')\n' +
    'const app = electron.app\n' +
    'const BrowserWindow = electron.BrowserWindow\n' +
    '\n' +
    'let mainWindow;\n' +
    '\n' +
    'function createWindow () {\n' +
    '\tmainWindow = new BrowserWindow({width: 800, height: 600})\n' +
    '\tmainWindow.loadURL(`file://${__dirname}/index.html`)\n' +
    '\tmainWindow.webContents.openDevTools()\n' +
    '\tmainWindow.on(\'closed\', function () {\n' +
    '\t\tmainWindow = null\n' +
    '\t})\n' +
    '}\n' +
    '\n' +
    'app.on(\'ready\', createWindow)\n' +
    '\n' +
    'app.on(\'window-all-closed\', function () {\n' +
    '\tif (process.platform !== \'darwin\') {\n' +
    '\t\tapp.quit()\n' +
    '\t}\n' +
    '})\n' +
    '\n' +
    'app.on(\'activate\', function () {\n' +
    '\tif (mainWindow === null) {\n' +
    '\t\tcreateWindow()\n\n' +
    '\t}\n' +
    '})',
  };

  editor: any;
  el: any;

  constructor(props: any) {
    super(props);
  }

  editorDidMount(editor: any, monaco: any) {
    console.log('editorDidMount', editor);
    this.editor = editor;
    editor.focus();
  }

  onChange(newValue: any, e: any) {
    //console.log('onChange', newValue, e)
  }

  keydown = (e: any) => {
    if (e.key.toLowerCase() === 'escape') {
      e.preventDefault();
      Mousetrap.trigger('f4', 'keydown');
    }
  };


  render() {
    if (this.props.show) {
      this.el = document.activeElement;
      this.editor.focus();
    } else {
      if (this.el) {
        this.el.focus();
      }
    }
    return (
      <div
        className={`${SIDEBAR}`}
        style={this.props.show ? SHOW : null}
        onKeyDown={this.keydown}
      >
        <h2 className={`${SIDEBAR_TITLE}`}>USER.PROCLIB($$$COIBM)</h2>
        <AceEditor
          height={'calc(100% - (24px + 0.85rem + 0.85rem)'}
          width={'100%'}
          mode='javascript'
          value={this.state.code}
          theme='solarized_dark'
          onChange={this.onChange.bind(this)}
          name='UNIQUE_ID_OF_DIV'
          editorProps={{$blockScrolling: true}}
          onLoad={this.editorDidMount.bind(this)}
        />
      </div>
    );
  }
}

