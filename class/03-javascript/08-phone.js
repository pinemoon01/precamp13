function changeFocus1(){

    const phone = document.getElementById("phone1").value;
    // input tag에 있는 값을 가져온다.
    
    if(phone1.length === 3) {
        document.getElementById("phone2").focus()
        // 커서 옮겨가는 input tag넣기
    }
}
// 커서 옮기는 changefocus

function changeFocus2(){

    const phone = document.getElementById("phone2").value;
    // input tag에 있는 값을 가져온다.
    
    if(phone1.length === 4) {
        document.getElementById("phone3").focus()
        // 커서 옮겨가는 input tag넣기
        // 세번째 커서로 옮겨가는거니까 길이는 4
        // phone3
    }
}