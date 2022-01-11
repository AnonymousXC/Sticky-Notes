const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
        height: 300,
        width: 310,
        minWidth: 310,
        minHeight: 300,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        },
        icon: path.join(__dirname, 'assets', 'img', 'icon.png'),
        title: 'My App',
    });

    win.on('blur', (event) => {
        win.webContents.send("blurred", null);
    });
    win.on('focus', (event) => {
        win.webContents.send('focused', null);
    });
    win.setTitle('My App');
    win.loadFile('index.html');
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

ipcMain.on("close-window", (event) => {
    win.close();
});

ipcMain.on("new-win", (event) => {
    createWindow();
});

ipcMain.on("always-on-top", (event) => {
    win.setAlwaysOnTop(true);
});

ipcMain.on("not-on-top", (event) => {
    win.setAlwaysOnTop(false);
});