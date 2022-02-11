
    setTimeout(function(){
       console.log("펑")
    } ,3000)
    2
    // VM1213:2 펑

    setInterval(function() {
        console.log("1초가 지났습니다")
    } ,1000)
    // 3
    // 숫자는 계속 올라감.

    let time = 10
undefined
setInterval(function(){
    if(time >= 0) {
        console.log(time)
        time = time -1
    }
},1000)
2
VM1851:3 10
VM1851:3 9
VM1851:3 8
VM1851:3 7
VM1851:3 6
VM1851:3 5
VM1851:3 4
VM1851:3 3
VM1851:3 2
VM1851:3 1
VM1851:3 0
// 0이 될때까지 타이머 작동.



// 타이머 실습
let time = 100
// undefined

setInterval (funtion() { 
    if(time>=0) {
        const min = String(Math.floor(time/60)).padStart(2,"0")
        const sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time - 1
    }
}, 1000)

// 결과나옴.