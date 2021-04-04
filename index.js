function apiTest(){
    window.electron.func1() // API を呼び出す
    window.electron.on("func1", (data) => {
        console.log(data) // func1 の結果
    }) // 戻ったデーターを表示
}
apiTest()