const {contextBridge, ipcRenderer} = require("electron")

contextBridge.exposeInMainWorld(
    "electron",
    {
        windowMinimize: () => ipcRenderer.send("window-minimize"),
        windowMaximize: () => ipcRenderer.send("window-maximize"),
        windowClose: () => ipcRenderer.send("window-close"),

        on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args)),
        func1: () => ipcRenderer.send("func1"),
        func2: (arg) => ipcRenderer.send("func2", arg)
    }
)