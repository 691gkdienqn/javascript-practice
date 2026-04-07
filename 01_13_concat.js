// Concat (= Concatenate) -> 문자열을 이어붙이는 연산자
// Python: "hello" + " " + "world"

let firstName = "Alex";
let lastName = "Kim";

console.log(firstName + " " + lastName);

// Python: 10 + "20" -> TypeError           | python은 두개 타입이 안맞으면 type error를 내버림
// JS: 10 + "20" -> "10" + "20" -> "1020"   | JS 는 형변환을 일으켜서(자동으로 타입변환이 일어남) concat
console.log(10+ "20");