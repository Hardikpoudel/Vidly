const Promise = fetch("https://jsonplaceholder.typicode.com/todos/1")

// const myPromise = new Promise((resolve, reject) => {
//   if (false) {
//   } else {
//     reject("False")
//   }
// })

// // myPromise.then((data) => {
// //   console.log(data)
// // })

// myPromise.catch((err) => {
//   console.log(err)
// })
// // first we passed the http request the return a promise
// // calling the data if the promise pass
Promise.then((data) => {
  data.json().then((jsonData) => {
    console.log(jsonData)
  })
}) //this is also an asynchronous function

// console.log(Promise)

// function names() {
//   for (var i = 0;i)
//   let i = 0;
//   // return i;
// }
//setTimeout and setInterval

// function names() {
//   console.log("Hello world")
// }
// setTimeout(() => {
//   names()
// // }, 3000)
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 3000)
// }
// names()

//we can also pass the argument in the timeout function
// names();
// console.log(i);

// if a function is call inside of a object it gives reference to that objet

// const person = {
//   name: "hardik",
//   walk() {
//     console.log(this)
//   },
// }

// // person.walk()
// const walk = person.walk.bind(person)
// walk()

// map function in javascript

const colors = ["red", "green", "blue"]

colors.map((names) => "<li>" + names + "</li>")
