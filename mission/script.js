// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < array.length; i++){
//     if (array[i] % 2 === 0){
//         console.log(array[i]);
//     }
// }




// for (let value of array) {
//     if (value%2 === 0){
//         console.log(value);
//     }
// }


// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// myArray.push(11, 12);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);
// myArray.pop();
// console.log(myArray);

// console.log(myArray.slice(0,5));

// myArray.splice(1,2,'a','b');
// console.log(myArray);


// const sentence = "Hello My Name is Yong."

// console.log(sentence.toUpperCase());
// console.log(sentence.toLowerCase());

// console.log(sentence.substring(0,5));



const users = [];

function getUser() {    
const name = prompt("이름을 입력하세요:");
const age = parseInt(prompt("나이를 입력하세요:"), 10)
users.push({ name, age });
}

function printUsers() {
    
    users.forEach((user, index) => {
        console.log(`이름: ${user.name}, 나이: ${user.age}`);
    });

}

function calAvg() {

    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    const avg = totalAge / users.length;
    console.log(`나이 평균: ${avg.toFixed(2)}`);

}

for (let i = 0; i < 3; i++) {
    getUser();
}

printUsers();
calAvg();