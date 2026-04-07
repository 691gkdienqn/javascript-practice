// Python: if / elif / else        
// JS: if / else if / else 

let age = 20;

if (age >= 19) {
    console.log("성인");
} else if (age >= 8) {
    console.log("학생");
} else {   
    console.log("어린이");
};  

//         |  파이썬에서는 ; 있던 부분이  자바스크립트에선 { } 중괄호  &  자바스크립트에선 조건문을 ( ) 괄호로 감싸주어야 한다.


// true 로 판단되는 값: true, 50, 1, -1, "100", "0", [], ..  ==> truty       |  false로 판단되는 값을 제외한 것들 
// false로 판단되는 값: false, 0, "", null, undefined, NaN   ==> falsy  
let score = "";
if (score) {
    console.log("점수: " + score);
} else {
    console.log("점수 없음");
};

//          | 점수가 있다면 점수:___score 출력, 그렇지 않다면 "점수 없음" 이라고 출력하라는 조건문 