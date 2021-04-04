const { app, BrowserWindow, ipcMain, ipcRenderer } = require("electron")
const path = require("path")

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })

    win.on('maximize', function (e) {
        win.webContents.send("window-maximize")
    })

    win.on('unmaximize', function (e) {
        win.webContents.send("window-unmaximize")
    })

    ipcMain.on("window-minimize", () => {
        win.minimize()
    })

    ipcMain.on("window-maximize", () => {
        win.isMaximized() ? win.unmaximize() : win.maximize()
    })

    ipcMain.on("window-close", () => {
        win.close()
    })

    win.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

ipcMain.on("func1", (event) => {
    console.log("func1 を実行")
    event.sender.send("func1", "func1 の結果")
})

ipcMain.on("func2", (event, arg) => {
    console.log("func2 を実行")
})