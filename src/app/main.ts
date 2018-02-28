import {app, dialog, ipcMain, session} from 'electron';
import {createMainWindow, loadURL} from '../main-window';
import * as log from 'electron-log';
import * as isDev from 'electron-is-dev';
import {createUpdater} from '../lib/updater';
import {createMenu} from '../menu';

// set proper logging level
log.transports.file.level = isDev ? false : 'info';
log.transports.console.level = isDev ? 'debug' : false;

let window: Electron.BrowserWindow;
let showStorybook = false;

// usually we'd just use __dirname here, however, the FuseBox
// bundler rewrites that, so we have to get it from Electron.
const appPath = app.getAppPath();

// fires when Electron is ready to start
app.on('ready', () => {
  session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
    details.requestHeaders['Origin'] = 'https://usilca32.ca.com:1443';
    callback({cancel: false, requestHeaders: details.requestHeaders});
  });

  window = createMainWindow(appPath);
  createMenu(window);

  if (isDev) {
    window.webContents.on('did-fail-load', () => {
      dialog.showErrorBox(
        'Error opening storybook',
        'Storybook failed to open. Please ensure the storybook server is running by executing \'npm run storybook\'',
      );
    });

    ipcMain.on('storybook-toggle', () => {
      showStorybook = !showStorybook;
      loadURL(window, appPath, showStorybook);
    });
  }
});

app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  if (url.startsWith('https://usilca32.ca.com:1443/')) {
    // Verification logic.
    event.preventDefault();
    callback(true);
  } else {
    callback(false);
  }
});

// fires when all windows are closed
app.on('window-all-closed', app.quit);
const filter = {
  urls: ['https://*.ca.com/*'],
};

// setup the auto-updater
createUpdater(app);
