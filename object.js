// object

// let obj={
//     name:'zamir',
//     dit:'30'
// }
// console.log(obj.dit)


// let obj={
//     name:'zamir',
//     age:'20',
//     job:'student',
//     hobby:{
//         sport:['Soccer','Basketball'],
//         books:['javascripr',"nobe,js"]
//     },
//     address:'Sverlovskyl',
//     city:'Bishkek',
//     house:'27',
//     car:'tesla',
//     sayHi: function (){
//         return 'salam aleikum '
//     },
//     'spoken languages':{
//         Kyrgyz:'native',
//         russian:'second languages',
//         english:'so so',
//     }
// }
// console.log(obj['spoken languages'])
// console.log(obj["spoken languages"].russian)
// console.log(obj.name)
// console.log(obj.hobby.sport[1])
// console.log(obj.sayHi().length)
// console.log(obj.sayHi())

// delete obj.car
// console.log(obj)
// Object.freeze(obj)
// delete obj.sayHi()

// Object.keys() - строковый элементтерди кайтарып берет
// console.log(Object.keys(obj).map(key =>{
//     return obj[key]
// }))

// Object.values() - обьекттин ичиндеги значенияны чыгарып берет
// console.log(Object.values(obj))

// Object.entries() - значения жана свойстваны массивке айландырыт
// console.log(Object.entries(obj))

// Object.assign()


// let player={
//     name:'Ronaldo',
//     team:'MU',
//     age:'37',
//     car:'Bugatti'
// },
//
// let player2={
//     name:'Messi',
//     team:'PSG',
//     age:'35',
//     cash:'10ml'
// }
//
// let player3={
//     name:'JR Neymar',
//     team:'PSG',
//     age:'30',
//     kom:'123'
// }
//
// let copy = Object.assign({},player,player,player)
// player.name='JR Ronaldo'
// console.log(copy)


// let arr= [
//     {
//         id:1,
//     name:'Ronaldo',
//     team:'MU',
//     age:'37',
// },
//     {
//         id:2,
//     name:'Messi',
//     team:'PSG',
//     age:'35',
// },
//     {
//         id:3,
//     name:'JR Neymar',
//     team:'PSG',
//     age:'30',
// },
//     {
//         id:4,
//         name:'jr',
//         team:'PSG',
//         age:'20',
//     }
// ]
// console.log(gamer.filter(el =>el.age>20))
// let arr=['Ronaldo','Messi','JR Neymar',jr]
// console.log(arr.map((el => {
//     if(el.id === 3){
//         el.name = 'Pele';
//     }return el
// })));


//1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.

// let obj= {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(Object.keys(obj).length)


// 2. Создайте объект obj = {a: 1, b: 2, c: 3}.
// Выведите на экран элемент с ключом 'c' двумя способами:
// через квадратные скобки и как свойство объекта.
// let obj={
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(obj.c)
// console.log(obj['c'])

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
// Выведите на экран зарплату Атай и Ширин.

// let obj ={
//     'Ширин': '1000',
//     'Айжан':'500',
//     'Атай': '200'
// }
// console.log(obj.Ширин,obj.Атай)

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Измените зарплату Атая на 500.

// let obj={
//     'Ширин': '1000',
//     'Айжан':'500',
//     'Атай': '200'
// }
// obj=Атай='500'
// console.log(obj)

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Добавьте к объекту ключ Медет со значением 1500.

// let obj={
//     'Ширин': '1000',
//     'Айжан':'500',
//     'Атай': '200'
// }
// obj=Медет='1500'
// console.log(obj)

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите значение ключа salary в консоль.
// let obj ={
//     'Ширин': '1000',
//     'Айжан':'500',
//     'Атай': {salary: '500'}
// }
// console.log(obj.Атай.salary)

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
// (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// let week = {
//     дүйшөмбү  : 1,
//     Шейшемби : 2,
//     Шаршемби : 3,
//     Бейшемби : 4,
//     Жума : 5,
//     Ишемби : 6,
//     Жекшенби : 7
// }
// console.log(week.дүйшөмбү)

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
// Выведите день недели, соответствующий значению переменной day.

// let day = {
//     1 : 'дүйшөмбү',
//     2 : 'Шейшемби' ,
//     3 : 'Шаршемби' ,
//     4 : 'Бейшемби' ,
//     5 : 'Жума' ,
//     6 : 'Ишемби' ,
//     7 :'Жекшенби'
// }
// console.log(day["1"])


// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Получите все ключи объекта.
// let obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: {salary: '500'}
// }
// console.log(Object.keys(obj))
// console.log(Object.keys(obj.Атай))

// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Получите все значения объекта.
//
// let  obj={
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: {salary: '500'}
// }
// console.log(obj)


// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите все entries объекта.
// let obj ={
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: {salary: '500'}
// }
// console.log(Object.entries(obj))

//12. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Выведите 1, если длина ключа name нечетная, 0 если четная.


// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] .
// Выведите все id в консоль через map.

// let obj= [
//     {id: 3},
//     {id: 5},
//     {id: 6},
//     {id: 7}
// ]
// console.log(obj.map(el=>{
//     if(el.id ===1){
//         el.id=1
//     }return el
// }))
//

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Добавьте новый ключ age со значением 25.
// Поменяйте значение name на Azat.
//
// let arr ={name: 'Igor'}
// Object.assign(arr, {['age']:'25'})
// arr.name='Azat'
// console.log(arr)

// 15. Вам дан объект product = {
//     name: "headphones",
//     price: 100,
//     discount: 0

// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%.
// Если это не так, сделайте скидку на 7%. Обновите объект.


// -----------------------\\-----------------------\\---------------------------------\\

// Task 2
// Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два
// Input: [1,2,3,4,5]
// Output: [2,4,6,8,10]

// Input: [7,14]
// Output: [14,28]




// Task 3 -----
//Напишите функцию, которая принимает массив объектов с полем id.
// Например [[{id: '100'}, {id: 2}]] и возвращает массив этих id
// Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// Output: [1,2,3,4]
//
// Input: [{id: true}]
// Output: [true]

//  function func (arr) {
//     let arr2 = []
//     for (let i = 0; i < arr.length; i++) {
//         arr2.push(arr[i].id)
//     }
//     return arr2
// }
// console.log(func([{id: 1},{id: 2},{id: 3},{id: 4}]))


// Task 4
// Напишите функцию, которая принимает массив чисел и возвращает массив строк по
// шаблону <h1>{number}</h1>
// Input: [1,2]
// Output: ['<h1>1</h1>','<h1>2</h1>']
//
// Input: ['Ivan']
// Output:

// Input: ['Ivan']
// Output: ['<h1>Ivan</h1>']

// function arr(arr2){
//     return arr2.map(number=> `<h1>${number}</h1>`)
// }
// console.log(arr([1,2]))

// Task 5
// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв
// Input: ['ab','abc','abcd']
// Output: ['ab','abcd']

// Input: ['abc','abcde']
// Output: []
// Task 6

//  function func (arr) {
//     let arrTwo = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length % 2 === 0) {
//             arrTwo.push(arr[i]);
//         }
//     }
//     return arrTwo;
// }
// console.log(func(['ab','abc','abcd']))

// Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных
// на два, которые делятся на 10 без остатка
// Input: [1,2,3,7,10,5]
// Output: [20,10]

// function func (num) {
//     let num2 = [];
//     for (let i = 0; i < num.length; i++) {
//         let arr = num[i] * 2;
//         if (arr % 10 === 0) {
//             num2.push(arr);
//         }
//     }
//     return num2;
// }
// console.log(func([1,2,3,7,10,5]))

// Task 7
// Напишите функцию, которая принимает массив булевых значений и возвращает массив
// только со значениями true
// Input: [true,false,true,true]
// Output: [true,true,true]
//
// Input: [false,true]
// Output: [true]


// function car(cat){
//     for (let i = 0; i < cat.length; i++){
//         if(cat[i] === true){
//             console.log(cat[i])
//         }
//     }
//     return cat
// }
// console.log(car([true,false,true,true]))


// Task 8
// Напишите функцию, которая принимает массив значений в т.ч и значения undefined и
// возвращает массив только без значений undefined
// Input: [true, false, true,true, undefined, true, undefined]
// Output: [true, false, true, true, true]

// Input: [undefined, true, undefined]
// Output: [true]

// function func(arr){
//     return arr.map(el=> el !==undefined && el)
// }
// console.log(func([true, false, true,true, undefined, true, undefined]))


// Task 9
// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce
// Input: [1,2,3,4,5]
// Output: 15
//
// Input: [2, 11, 5]
// Output: 18

// function name (car){
//     return car.reduce((acc,el) => acc + el)
// }
// console.log(name([1,2,3,4,5]))

// Task 10
// Напишите функцию, которая принимает массив булевых значений и
// возвращает результат логического И над ними. Использовать reduce
// Логическое И - это операция &&
// Input: [true,true,true,true]
// Output: true

// Input: [true,false,true]
// Output: false

// function name (car){
//     return car.reduce((acc,el) => acc || el)
//
// }
// console.log(name([true,true,true,true]))


// Task 11
// Напишите функцию, которая принимает массив чего угодно и возвращает объект с полями
// {field1, field2, field3, field4}. Использовать reduce. Готовим баночки и не отчаиваемся. Будет 🔥
// Input: [true,1,'wow','you are smart, bro']
// Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}


// function fan(arr) {
//     return arr.reduce(function (acc, val, el) {
//         acc['string' + (el + 3)] = val
//         return acc
//     }, {})
// }
//
// console.log(fan([true, 1, 'wow', 'you are smart, bro']))

// Task 12
//Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект.
// Только с полями, у которых тип значения - строка;
// Input: { name: 'Baha', isAdmin: true }
// Actions:
// Output: { name: 'Baha' }

// Input: { isAdmin: true }
// Actions:
// Output: {}
//


// function func(obj) {
//     let obj2 = {};
//     for (let key in obj) {
//         if (typeof obj[key] === 'string') {
//             obj2[key] = obj[key];
//         }
//     }
//     return obj2;
// }
//
// console.log(func({name: 'Baha', isAdmin: true})) // { name: 'Baha' }
