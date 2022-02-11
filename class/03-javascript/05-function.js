
// function으로 함수시작
// pressedbtn 이라는 함수가 실행되었을때 = 버튼이 눌렸을때 6자리 숫자를 문자열로 바꿔서 토큰에 할당함.
//  인증번호 전송 누르면 숫자 계속 바뀜. 


const pressedBtn = () => {
    const token = String( Math.floor( Math.random() * 100000) ).padStart(6, "0")
    document.getElementById("auth").innerText = token
    document.getElementById("auth").style.color = "#" + token
}


