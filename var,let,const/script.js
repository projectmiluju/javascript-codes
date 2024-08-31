// var greeting = 'hello';
// console.log(greeting); // hello

// var greeting = 'hi';
// console.log(greeting); //hi

// greeting = 'how are you?';
// console.log(greeting); //how are you?

// //중복선언 불가, 재할당은 가능
// let greeting = 'hello';
// console.log(greeting); // hello

// let greeting = 'hi';
// console.log(greeting);
// //Uncaught SyntaxError: Identifier 'greeting' has already been declared

// greeting = 'how are you?';
// console.log(greeting); //how are you?

// // 중복선언, 재할당 모두 불가
// const greeting = 'hello';
// console.log(greeting); // hello

// // const greeting = 'hi';
// // console.log(greeting);
// // //Uncaught SyntaxError: Identifier 'greeting' has already been declared

// greeting = 'how are you?';
// console.log(greeting);
// //Uncaught TypeError: Assignment to constant variable

// const arrayList = [1, 2, 3];
// arrayList.push(4);
// console.log(arrayList);

// const objectList = { a: 'a', b: 'b' };
// objectList.c = "c"
// console.log(objectList);


// // 함수 내에서만 유효
// function func() {
//     if (true) {
//         var a = 'a';
//         console.log(a); // 'a'
//     }
//     console.log(a); // 'a'
// }

// func();
// // console.log(a); // ReferenceError: a is not defined


// // 블록 내부에서만 유효
// function func() {
//     if (true) {
//         let a = 'a';
//         console.log(a); // 'a'
//     }
//     console.log(a); // ReferenceError: a is not defined
// }
// // func();
// // console.log(a); // ReferenceError: a is not defined

// // let hello;
// // console.log(hello);



// a = 5;
// console.log(a);
// var a; // 5


// console.log(greeting);
// // Uncaught ReferenceError: Cannot access 'greeting' before initialization
// const greeting = "hello";

// console.log(greeting);
// // undefined
// let greeting = "hello";

// func(); //hoisting test

// function func() {
//     console.log("hoisting test");
// }
