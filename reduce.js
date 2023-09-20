//reduce


// let arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr.filter(el=>el%2===0)) //оной жолу бирок бул ката
// console.log(arr.reduce((acc,el)=>{
//     if(el % 2  ===1){
//         acc.push(el)
//         return acc
//     }return acc
// },[]))
//
//
// let name ='motion web llc'
// console.log(name.split('').reduce((acc,el)=>{
//     return acc+el
// },''))
//
// console.log([1,2,3,4].reduce((acc,el)=>{
//     acc.push(el+el)
//     return acc
// },[]))






// тапшырма

// let mame=['жыргал','исак','азамат','элдар','замир']
// console.log(mame.reduce((acc,el,idx)=>{
//   return mame.map(el => {
//       return el.slice(0, 2)+el[2].toUpperCase()+el.slice(3)
//   })
// },[]));
//
// let arr=['жыргал','исак','азамат','элдар','замир']
// console.log(arr.reduce((acc,idx)=>{
//     acc.push(idx.toLocaleString().replace('а','о'))
//     return acc
// },[]))
// // 1
// let cat=['жыргал','исак','азамат','элдар','замир']
// console.log(cat.toLocaleString().replace('а  ','о'))

//
// let arr=['жыргал','исак','азамат','элдар','замир']
// console.log(arr.reduce((acc,el,idx)=>{
//     return arr.map(el=>{
//         return el.slice(0,2)+el[2].toUpperCase()+el.slice(3 )
//     })
// },[]))

