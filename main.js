// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini

// let a = 5;
// let b = 2;
// let c = (a % b);
// alert(c);



// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

// let random = Math.trunc(11 * Math.random());
// alert(random);



// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

// let number = (12.510);
// let butunson = Math.floor(number);
// alert(butunson);



// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 
// let soz = ("MARS IT SCHOOL"); 
// function myFunction() {
//     let ajratilgan = soz.replaceAll(" ", "");
//     let uzunlik = soz.length;
//     alert(uzunlik);
// }

// myFunction();





// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

// for (let i = 0; i < 10; i++) {
//     console.log("MARS IT SCHOOL");
// }


// 6-savol Array methods

// /let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering
// const array = [];
// const isim = ["d", "i", "y", "o", "r"]; 
// let d = array.push("d");
// let i = array.push("i");
// let y = array.push("y");
// let o = array.push("o");
// let r = array.push("r");

// console.log(array);



// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering
// let yosh = prompt("yoshingizni kiriting");
// if (yosh > 18) {
//     alert("Siz balag'ot yoshiga yetgansiz");
// }else  {
//     alert("siz balog'at yoshiga yetmagansiz")
// }




// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

// let ism = prompt("Ism kiriting");
// let teskari = ism.split("").reverse("");
// console.log(teskari);










// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// const juftson = [];
// for (const number of numbers) {
//     if (number % 2 == 0) {
//         juftson.push(number);
//     }
// }
// console.log(juftson);
