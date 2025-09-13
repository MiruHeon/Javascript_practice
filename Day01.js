// JavaScript는 웹 브라우저에서 동작하는 프로그래밍 언어이자
// Node.js와 같은 환경에서는 백엔드 개발이 가능한 언어다.
// 주로 웹사이트를 동작시키는 역할을 한다.

// -----------------------------------
// 1. 출력하는 방법
// -----------------------------------
// 화면에 값을 출력할 때는 console.log() 사용
console.log("Hello, JavaScript!");
console.log("숫자:", 123);
console.log("합:", 10 + 20);

// -----------------------------------
// 2. 변수 선언
// -----------------------------------
// var : 기존 방식. 재선언 가능하지만, 스코프(scope)가 함수 단위여서 주의
// let : ES6 이후 도입. 블록 단위 스코프, 재선언 불가
// const : 상수. 선언 시 반드시 초기값 필요, 값 변경 불가

var a = 10;   // 재선언 가능
let b = 20;   // 재선언 불가
const c = 30; // 상수, 값 변경 불가

console.log("a + b + c =", a + b + c);

// -----------------------------------
// 3. 자료형 (Type)
// -----------------------------------
// JavaScript는 동적 타입 언어
let number = 100;      // 숫자(Number)
let text = "Hello";    // 문자열(String)
let isTrue = true;     // 불리언(Boolean)
let nothing = null;    // null
let notDefined;        // undefined

console.log(number, text, isTrue, nothing, notDefined);

// -----------------------------------
// 4. 함수 선언
// -----------------------------------
// 1) 일반 함수
function multiplyByTen(x) {
    return x * 10;
}

console.log("5 * 10 =", multiplyByTen(5));

// 2) 화살표 함수 (ES6)
const add = (x, y) => x + y;
console.log("5 + 3 =", add(5, 3));

// -----------------------------------
// 5. 조건문
// -----------------------------------
if (a > 5) {
    console.log("a는 5보다 크다.");
} else if (a === 5) {
    console.log("a는 5이다.");
} else {
    console.log("a는 5보다 작다.");
}

// -----------------------------------
// 6. 반복문
// -----------------------------------

// for문 : 반복 횟수가 명확할 때
for (let i = 0; i < 5; i++) {
    console.log(`for문 i의 값: ${i}`);
}

// while문 : 반복 조건이 참일 동안 반복
while (a < 15) {
    console.log(`while문 a의 값: ${a}`);
    a++;
}

// do-while문 : 최소 한 번은 실행 후 조건 검사
let j = 0;
do {
    console.log(`do-while j의 값: ${j}`);
    j++;
} while (j < 3);

// -----------------------------------
// 7. 배열
// -----------------------------------
let fruits = ["사과", "바나나", "체리"];
console.log(fruits);
console.log("첫 번째 과일:", fruits[0]);

// 배열 반복
for (let i = 0; i < fruits.length; i++) {
    console.log(`과일 ${i}:`, fruits[i]);
}

// 배열 메소드 예시
fruits.push("오렌지"); // 뒤에 추가
fruits.pop();           // 뒤에서 제거
console.log("배열 after push/pop:", fruits);

// -----------------------------------
// 8. 객체 (Object)
// -----------------------------------
let person = {
    name: "유솔",
    age: 20,
    greet: function() {
        console.log("안녕하세요, 저는 " + this.name + "쨩 데스네.");
    }
};

console.log(person.name, person.age);
person.greet();

// -----------------------------------
// 9. 이벤트/함수 활용 예시
// -----------------------------------
function sayHello(name) {
    console.log(`${name}사마, 안녕하세요!`);
}

sayHello("유솔");

// -----------------------------------
// 10. 요약
// -----------------------------------
// 1. 출력 : console.log()
// 2. 변수 : var, let, const
// 3. 자료형 : Number, String, Boolean, null, undefined
// 4. 함수 : function, 화살표 함수
// 5. 조건문 : if, else if, else
// 6. 반복문 : for, while, do-while
// 7. 자료구조 : 배열(Array), 객체(Object)
// 8. 이벤트 및 함수 활용
