let menuList = new XMLHttpRequest()
menuList.addEventListener("load", (e) => {
    dropDown.innerHTML = e.target.response
})
menuList.open("GET", "./window/menu.html")
menuList.send()