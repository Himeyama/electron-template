let titleDOM = document.createElement("div")
let appIcon = document.createElement("a")
let titleMenu = document.createElement("div")
let windowControls = document.createElement("div")
let windowMinimize = document.createElement("div")
let windowMaxRestore = document.createElement("div")
let windowClose = document.createElement("div")
let menubar = document.createElement("nav")
let dropdown = document.createElement("div")
let windowTitle = document.createElement("div")
let dropDown = document.createElement("div")

document.body.prepend(titleDOM)
titleDOM.append(appIcon)
titleDOM.append(titleMenu)
titleDOM.append(windowControls)
titleMenu.append(menubar)
titleMenu.append(windowTitle)
windowControls.append(windowMinimize)
windowControls.append(windowMaxRestore)
windowControls.append(windowClose)
menubar.append(dropDown)

titleDOM.id = "title"
appIcon.id = "app-icon"
titleMenu.id = "title-menu"
windowControls.id = "window-controls"
windowMinimize.id = "window-minimize"
windowMaxRestore.id = "window-max-restore"
windowClose.id = "window-close"
menubar.id = "menubar"
dropdown.classList.add("dropdown")
windowTitle.id = "window-title"
dropDown.classList.add("dropDown")

windowTitle.innerText = "タイトル"

// titleDOM.innerHTML = `
// <a id="app-icon"></a>
// <div id="title-menu">
//     <nav id="menubar">
//         <div class="dropdown">
//             <button class="btn" type="button" id="files" data-bs-toggle="dropdown" aria-expanded="false">
//                 ファイル(F)
//             </button>
//             <ul class="dropdown-menu" aria-labelledby="files">
//                 <li><a class="dropdown-item" href="#">印刷</a></li>
//                 <li><hr class="dropdown-divider"></li>
//                 <li><a class="dropdown-item" href="#">終了</a></li>
//             </ul>
//             <button class="btn" type="button" id="edit" data-bs-toggle="dropdown" aria-expanded="false">
//                 編集(E)
//             </button>
//             <ul class="dropdown-menu" aria-labelledby="edit">
//                 <li><a class="dropdown-item" href="#">コピー</a></li>
//                 <li><a class="dropdown-item" href="#">切り取り</a></li>
//             </ul>
//         </div>
//     </nav>
//     <div id="window-title">タイトル</div>
// </div>
// <div id="window-controls">
//     <div id="window-minimize"></div>
//     <div id="window-max-restore"></div>
//     <div id="window-close"></div>
// </div>
// `


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

function windowResize(){
    let menubar = document.getElementById("menubar")
    let windowTitle = document.getElementById("window-title")
    windowTitle.style.width = `calc(100% - ${menubar.clientWidth}px - 1px)`
}

windowResize()
window.addEventListener("resize", windowResize)

// let menu = document.getElementById("sub-menubar")
// for(let m of menu.children){
//     console.log(menu)
//     m.addEventListener("click", (e) =>{
//         console.log(e.path[0].children[0].style.display = "block")
//     })
// }

// document.addEventListener("mouseleave")