// 힌트
// input 태그의 값을 가져올 때
// document.getElementById(" ").value 를 이용할 수 있습니다
// 가져온 값의 타입은 문자열입니다. 숫자로 어떻게 변환해야 할까요?

// 가이드
// 1. input 태그의 값을 가져와 변수에 할당한다
// 2. 결과를 담을 변수를 만들고, 연산 결과를 변수에 할당한다
// 3. html의 결과 박스(id="result")의 내용을 결과값으로 바꿔준다

// a 와 b를 가진 태그를 입력받고 있다.


function add () {
    
    let firstNum, secondNum
    // 변수 한번에 만들기
    firstNum = Number(document.getElementById("a").value);
    // firstnum 변수에 a 값 할당하기
    secondNum = Number(document.getElementById("b").value);
    // Number 함수로 문자열을 숫자로 변환한다. 

    let result = firstNum + secondNum

    document.getElementById("result").innerText = result
    // 결과값으로 바꿔준다. 
}