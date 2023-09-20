// console.log(this

// let obj ={
//     hello:function (){
//         console.log('hello work')
//         return this
//     },
//     obj2:{
//         bread:'bog',
//         speak: () =>{
//             console.log('wolf')
//             return this
//         }
// }
// }
// console.log(obj.hello())
// console.log(obj.obj2.speak())
//
// function sayHello(){
//     console.log(this, "hello")
// }
// sayHello()


// const person = {
//     name:"motion",
//     age: 3,
//     greeting: sayHello,
//     loginFo: function (job,phone) {
//         console.log(`name is ${this.name}`)
//         console.log(`age is ${this.age}`)
//         console.log(`job is ${job}`)
//         console.log(`phone is ${phone}`)
//     }
// }
// person.loginFo('cat','+778565153')
//
// const secondPerson = {
//     name:'zamir',
//     age:10,
// }
//
// person.greeting.bind(secondPerson)()

// let car = {
//     brand: 'Honda',
//     getBrand: function () {
//         return this.brand;
//     }
// }
//
// let bike = {
//     brand: 'Harley Davidson'
// }
//
// let brand = car.getBrand.bind(bike);
// console.log(brand());
//
//
// let arr = {
//     valid:'Honda',
//     name: function (){
//         return this.valid;
//     }
// }
//
// let tot ={
//     valid: 'hello'
// }
// let valid = arr.name.bind(tot);
// console.log(valid())


alert('zamir1')
alert('zamir2')