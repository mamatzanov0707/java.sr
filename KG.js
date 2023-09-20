// const camelCase = (https) => {
//     return (name) => {
//         return (hosting) => {
//             return (domain) => {
//                 return (page) => {
//                     return `${https}://${name}.${hosting}.${domain}/${page}`
//                 }
//             }
//         }
//     }
// }
//
// console.log(camelCase('https')('motionacademy')('vercel')('app')('club'))
//
// const car = (https) =>{
//     return (www) =>{
//         return (name) =>{
//             return (domain)=>{
//                 return (page)=>{
//                     return `${https}://${name}.${www}.${domain}/${page}`
//                 }
//             }
//         }
//     }
// }

// console.log(car('https')('www')('Telegram')('com'))

// На входе два одномерных массива. В каждом массиве всегда по два элемента.
// Верните третий массив результат которого будет сумма элементов предыдущих
// Input: [2,4], [1,3]
// Actions:
//     Output: [3,7]


// Input: [1,7], [9,3]
// Actions:
//     Output: [10, 10]
// Task 2

// Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два
// Input: [1,2,3,4,5]
// Output: [2,4,6,8,10]
//
// Input: [7,14]
// Output: [14,28]

// const work =(http) =>{
//     return (www) =>{
//         return (name) =>{
//             return (domain) =>{
//                 return `${http}://${www}.${name}.${domain}`
//             }
//         }
//     }
// }
// console.log(work('https')('www')('amazon')('com'))
// console.log(work('https')('www')('google')('com'))
// console.log(work('https')('www')('toyota')('com'))
// console.log(work('https')('www')('apple')('com'))
//
// const wor = (http) => {
//     return (www) =>{
//         return  (name) =>{
//             return (domain) =>{
//                 return ``
//             }
//         }
//     }
// }


// const arr = [10,20,[30,40,[50,70,90]]];
// console.log(arr.flat(2))

// let arr = [1,[2], 3]
//
// const car = arr.flatMap((x)=>{
//     return x * 3
// })
// console.log(car)

// let arr =[]
// arr[0] =10
// arr[1] =20
// arr.foo =30
// console.log(arr.length)