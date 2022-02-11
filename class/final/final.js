// 휴대폰번호 입력 부분

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
    
    if(phone2.length === 4) {
        document.getElementById("phone3").focus()
        // 커서 옮겨가는 input tag넣기
        // 세번째 커서로 옮겨가는거니까 길이는 4
        // phone3
    }
}

function changeFocus3() {
    const phone = document.getElementById("phone3").value;
    if(phone3.length ===4) {
        document.getElementById("sendMessage").focus()
        document.getElementById("sendMessage").disabled = False; 
    }
}

// 문자인증+타이머 부분
function initButton(){
    document.getElementById("sendMessage").disabled = true;
    document.getElementById("finish").disabled = true;
    document.getElementById("auth").innerText = "000000";
    document.getElementById("timeLimit").innerText = "03:00";
    document.getElementById("sendMessage").setAttribute("style","background-color:gray;")
    document.getElementById("finish").setAttribute("style","background-color:gray;")
  }

  let isStarted = false;
// pressedBtn 밖에 변수를 생성해야 단독으로 위치할수있게 함
// 컴퓨터는 위에서 아래로 코드를 읽어, 만일 이 변수가 아래에 있었으면
// 컴퓨터가 실행할때 코드 못읽어옴, 위쪽에다 적어야 변수가 설정되고 그럼
// 여기가 true 이면 if가 못돌아가고 else가 돌아간다. 


function pressedBtn(){

    if(isStarted === false){


    isStarted = true;
    // 여기서 true로 바꿔줘야됨.


  let processID = -1;
   // 06 timer 와 병합

  document.getElementById("finish").setAttribute("style","background-color:yellow;")
  document.getElementById("finish").disabled = false;

  if (processID != -1) clearInterval(processID);
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("certificationNumber").innerText = token;
  let time = 180;
  processID = setInterval(function () {
    if (time < 0 || document.getElementById("sendMessage").disabled) {
      clearInterval(processID);
      initButton();
      return;
    }
    let mm = String(Math.floor(time / 60)).padStart(2, "0");
    let ss = String(time % 60).padStart(2, "0");
    let result = mm + ":" + ss;
    document.getElementById("timeLimit").innerText = result;
    time--;
  }, 50);
};




