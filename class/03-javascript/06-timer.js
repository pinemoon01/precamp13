let isStarted = false;
// pressedBtn 밖에 변수를 생성해야 단독으로 위치할수있게 함
// 컴퓨터는 위에서 아래로 코드를 읽어, 만일 이 변수가 아래에 있었으면
// 컴퓨터가 실행할때 코드 못읽어옴, 위쪽에다 적어야 변수가 설정되고 그럼
// 여기가 true 이면 if가 못돌아가고 else가 돌아간다. 


function pressedBtn(){

    if(isStarted === false){


    isStarted = true;
    // 여기서 true로 바꿔줘야됨.

    const token = String( Math.floor( Math.random() * 100000) ).padStart(6, "0")
    document.getElementById("auth").innerText = token

    let time = 60
    // 10초로 설정
    let timer = null

    timer = setInterval(function(){

        if(time>=0) {
            document.getElementById("countdown").innerText = time;
            time = time - 1
        } else {
            document.getElementById("finish").disabled = true;
            isStarted = false;
            clearInterval(timer)
            // clearinterval을 하면 기존에 돌고있던 setinterval 변수를 삭제하는 것
            // 그럼 동작은 멈추고 setinterval은 메모리를 반환하고 완전히 종료됨.
        }
// if 에서 0까지 줄어들다가 else 에서 0이하로 가면 멈춰라를 disabled=true로 준것이다. 
    },1000)

} else {
    // isstart가 true일 경우 else로 넘어간다
    alert("타이머가 이미 동작중입니다")


}
// 타이머가 돌때랑 안돌때 나눠서 만들어준다.
// 조건문 사용해서 인증번호 전송이 안눌리게 한다.
