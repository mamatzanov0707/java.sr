// break()
// continue()
// for (let i = 0; i < 1; i++){
//     console.log('акыркы элементи кесип берет',i)
// }
// for (let i = 0; i <= 2; i++){
//     if(i % 2 !==0) console.log(i)
// }
// for (let i = 0; i < 12; i++) {
//     if( i ===5){
//         continue
//     }
//     console.log(i)
//
// }
//
// let arr =[1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < arr.length; i++){
//     if(arr[i]===3){
//         break
//     }
//     console.log(arr[i])
// }


// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(i, j);
//     }
// }

//
// let i = 0;
// while (i < 10) {
//     i++;
//     if (i +++ 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }


// 1. Выведите столбец чисел от 1 до 50.
// for(let i = 0; i < 50; i++){
//     console.log(i)
// }

// 2. Создайте переменную с пустым массивом,
// заполните массив 10-ю элементами X с помощью цикла.
// let arr =[]
// for(let i = 0; i < 10; i++)
//     arr.push('x')
// console.log(arr)

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7].

// let arr =[5, 3, 1, 2, 7]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }


// С помощью цикла for выведите все эти элементы в консоль.
// 4. Вам дан массив с элементами [5, 2, 1, 2].
// С помощью цикла for найдите произведение элементов этого массива.

// let arr=[5, 2, 1, 2]
// for (let i =0; i < arr.length; i++){
//     console.log(arr[i]*arr[i])
// }

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.

// let i = 0;
// while (i < 100) {
//     i++;
//     if (i +++ 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.

// let arr =[]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]+arr[i])
// }

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8].
// С помощью цикла for найдите сумму элементов этого массива.
// Запишите ее в переменную result.

// let arr =[2, 4, 5, 6, 8]
// for (let i = 0; i  < arr.length;i++){
//     console.log(arr[i]+arr[i])
// }

// 8. Вам дан массив [3, 4, 6, 12, 3, 5].
// С помощью цикла for и оператора if выведите на экран
// столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let arr =[3, 4, 6, 12, 3, 5]
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i])
//     }
// }


// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.

// let arr =[2,3,4, -2, -3, -5]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         console.log(arr[i]+arr[i])
//     }
// }


// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20].
// С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr =[5, 1, 3,4, 7, 6, 15, 3, 20]
// for (let i =0; i <arr.length; i++){
//     if (arr[i] === 4){
//         console.log('Есть!')
//     }else {
//         console.log('жок')
//     }
// }


// -------------------\\---------------------------\\
//



// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20].
// С помощью цикла for и оператора if проверьте есть ли в
// массиве элемент со значением, равным 4. Если есть - выведите на экран
// 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr =[5, 1, 3, 7, 6, 15, 3, 20]
// for (let i =0; i <arr.length; i++){
//     if (arr[i] === 4){
//         console.log('Есть!')
//     }else {
//         console.log('no')
//     }
// }

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран
// только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let car =[10, 20, 30, 40, 135, 2000]
// for (let i = 0; i < car.length; i++){
//     if (String(car[i])[0] === '1'||String(car[i])[0] === '2'||String(car[i])[0] === '5'){
//         console.log(car[i])
//     }
// }


// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9].
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// let car =[1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i < car.length; i++){
//     console.log('-' + car.join() + '-')
// }

// 13. Вам дано число n=1000. Делите его на 2 столько раз,
// пока результат деления не станет меньше 50. Какое число получится?
// Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную num.
// let n = 1000;
// let num = 0;
// while (n >= 50) {
//     n = n / 2;
//     num++;
// }
// console.log(n)
// console.log(num)


// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее
// арифметическое его элементов (сумма элементов, делить на количество).

// let b =[1, 2, 3, 7, 6, 9]
// for (let i = 0; i < b.length; i++){
//     console.log(b[i] * b [i])
// }


// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла
// найдите сумму квадратов элементов этого массива.
// let arr =[1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i] * arr[i])
// }
// const factorial = (arr) => {
//     if(arr ===0 || arr ===1){
//         return 1
//     }else {
//         return arr * factorial(arr -1)
//     }
// }
// console.log(factorial(5))

// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.


// let arr =[1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// for (let i = 0; i < arr.length; i++){
//         if (arr[i] >10){
//             break
//         }if (arr[i] < 1){
//             continue
//     }
//         console.log(arr[i])
// }



// 17. Создайте переменную с пустым массивом, заполните массив
// 10-ю случайными числами от 1 до 10 с помощью цикла.

// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.


// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.

// let car =[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for (let i = 0; i < car.length; i++){
//     if (car[i] < 10){
//         continue
//     }else if(car % 2){
//         console.log(car)
//     }
//     console.log(car[i])
// }

// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.

// let str = 'jzvzszrzpz';
// let result = '';
// for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 1) {
//         result += str[i].toUpperCase();
//     } else {
//         result += str[i];
//     }
// }
// console.log(result);


// for (let i = 0; i < 10; i++){
//     console.log('элементи',i)
// }
