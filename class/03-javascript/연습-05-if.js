if( 1+1 === 2 ) { 
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM486:2 정답입니다
// undefined
if(true) {
    console.log("정답입니다!")
} else {
    console.log("틀렸습니다")
}
// VM718:2 정답입니다!
// undefined
const pw1= "123"
// undefined
const pw2 = "345"
// undefined
if(pw1 === pw2) {
    alert("비밀번호가 일치합니다")
} else {
    alert("예?")
}

const profile = {
    name: "철수",
    age : 12,
    school : "다람쥐초등학교"
}

if( profile.age >= 20) {
    console.log("성인입니다")
} else if( 8 <= profile.age <= 19) {
    console.log("학생입니다")
} else if( profile.age <= 7) {
    console.log("어린이입니다")
} 
// 객체에서 가져오는거니까 변수명.지정데이터여야함, 그래서 profile.age를 사용함
// else 는 () 를 이용한 조건문이 들어가지 않음. 
if( profile.age >= 20) {
    console.log("성인입니다")
} else if( profile.age >=8 && profile.age <= 19) {
    console.log("학생입니다")
} else if( profile.age <= 7) {
    console.log("어린이입니다")
} 
VM2369:4 학생입니다
undefined
if( profile.age >= 20) {
    console.log("성인입니다")
} else if( 8 <= profile.age && 19>= profile.age) {
    console.log("학생입니다")
} else if( profile.age <= 7) {
    console.log("어린이입니다")
} 
VM2376:4 학생입니다


const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
    ]

    for (let n = 0; n< fruits.length; n++) {
        console.log(fruits[4].number + " " + fruits[4].title)
}
// 여기서 조건문 if 는 쓰지 않는다. 
// 5 사과 로 결과가 나온다. 