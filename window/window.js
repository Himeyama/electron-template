window.electron.on("window-maximize", () => {
    document.getElementById("window-max-restore").classList.add("window-maximize")
})

window.electron.on("window-unmaximize", (e) => {
    document.getElementById("window-max-restore").classList.remove("window-maximize")
})

document.getElementById("window-minimize").addEventListener("click", () => {
    window.electron.windowMinimize()
})

document.getElementById("window-max-restore").addEventListener("click", () => {
    window.electron.windowMaximize()
})

document.getElementById("window-close").addEventListener("click", () => {
    window.electron.windowClose()
})