// 배열(Array)
// Python: 리스트(List)

// index:      0.  1.  2.
let numbers = [10, 20, 30];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// Python: [-1] -> 마지막 요소      | JS: .at()  메소드가 음수 인덱스를 허용하고 이를 배열의 끝에서 시작하는 인덱스로 해석
console.log(numbers.at[-1]);

// 배열의 원소 개수 -1 --> 마지막 인덱스 | (배열의 인덱스가 >0 인 경우)
console.log(numbers[numbers.length -1]);

// Python: [3] -> IndexError 
console.log(numbers[3]);

console.log("==========");

let scores = [82, 95, 77]
for (const [i, score] of scores.entries()) {
    console.log(i + "번째 요소의 값: " + score);
};

// 다양한 데이터 타입을 혼합해서 사용하는 것도 가능    | 다만, 권장되진 x. 섞어쓸거면 데이터가 어떤걸 의미하는지 라벨링 해주는게 좋다 
let date = ["hello", 100, true];