function checkValidation() {
// 값이 있는지 확인해서 변수나 상수에 할당
    const email = document.getElementById("email").value 
    const pw1 = document.getElementById("password1").value
    const pw1 = document.getElementById("password2").value

    // 이메일 값이 비어있지 않을때, 패스워드 원투도 값이 비어있지 않을때
    // 회원가입 버튼이 활성화되고 그렇지않으면 비활성화 된다를 적어준다.
    if(email !== "" && pw1 !=="" && pw2 !== "") {
        // 회원가입 버튼 활성화
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").setAttribute("style","background-color : yellow")
        // 인라인 방식으로 색깔 바꾸기
        // style 을 넣어주고 css 넣어주는 매개변수
    } else {
        // 회원가입 버튼 비활성화

        document.getElementById("submit").disabled = true;
        document.getElementById("submit").setAttribute("style","background-color : none")


    }

}

