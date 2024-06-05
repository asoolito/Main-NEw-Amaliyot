// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring
// let a = 12
// let b = 13
// console.log(a+b)

// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring
// let c = "12"
// console.log(typeof Number(c));
// console.log(Number(c));


// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering
// let d = Math.round(Math.random() * 100)
// let i = alert(`random son ${d} edi`)
// if (d % 2 == 0) {
//     console.log(`${d}= juft`)
// } else {
//     console.log(`${d}= toq`)
// }
// 
// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin
// let e = prompt("so'z kiriting")
// if (e == "Mars") {
//     console.log(e)
// } else {
//     console.log("Mars It school")
// }

// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring
// let box = [];
// let box2 = [];

// let f = ["olma ", "nok", "olchalar", "gilos", "anor"]
// f.forEach(arrayniIchidagiElemantlar =>{
//     if(arrayniIchidagiElemantlar.length >= 5 ){
//         box.push(arrayniIchidagiElemantlar);
//     }
//     else{
//         box2.push(arrayniIchidagiElemantlar);
//     }
// })
// console.log(box)
// console.log(box2)



// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring
// let karobka =[]
// let karobka2 = []
// for (let index = 0; index < 100; index++) {
//     if (index % 2 == 0) {
//         karobka.push(index)
//     } else {
//  karobka2.push(index)
//     }
// }
// console.log(karobka)
// console.log(karobka2)