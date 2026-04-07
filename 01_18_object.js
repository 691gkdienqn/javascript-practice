// 객체(Object)
// 여러 값을 이름(key)으로 묶어서 관리하는 자료 구조  
// Python의 Dictionary와 유사                    | 동일한건 아니다! 


//                      | key 부분엔 (여기에서는 name, age) "" 안줘도 됨
let user = {
    name: "alex",
    age: 40
}

console.log(user.name);
console.log(user["age"]);

user.name = "bob";
console.log(user.name);

console.log("============");

for (const key in user) {
    console.log(key);
};

console.log("===========");

for (const key in user) {
    console.log(key, user[key]);
};