const { app, BrowserWindow, ipcMain, Notification,session } = require('electron');
const path = require('path');

const {
  loadReactDevTools,
} = require('./extension-ReactDevTools/loadReactDevTools');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    },
  });

  win.loadFile('index.html');
}
// Alternate electronmon ( It's work how nodemon)
// electronReload(__dirname, {
//   electron: path.join(__dirname, "node_modules", ".bin", "electron"),
// });

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// add reactDevTools
loadReactDevTools(app, session);

ipcMain.on('notify', (_, message) => {
  new Notification({ title: 'Notification', body: message }).show();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
