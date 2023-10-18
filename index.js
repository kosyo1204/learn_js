'use strict';

// let admin;
// let name;
// name = 'John';
// admin = name;
// alert(admin);

// const EARTH = 'earth';
// let ourPlanetName = "Earth"; // 正答例
// let guest_name = 'guest';
// let currentUserName = "John"; // 正答例
// // 前提に認識ズレ。認識ずれをなくす質問→定数をつけるという意味?訪問とはどこに?

// const BIRTHDAY = '18.04.1982'; // make uppercase?
// const AGE = someCode(BIRTHDAY); // make uppercase?
// /* 
//   誕生日は誕生日は不変であり、ハードコードされるために大文字で良いが、
//   ageは年を重ねるごとに変わりゆくため小文字
// */

// データ型
// let name = "Ilya";
// alert( `hello ${1}` ); // hello1
// alert( `hello ${`name`}` ); // hello "name"
// alert( `hello ${name}` ); // hello Ilya

// インタラクティブ
// const answer = prompt('What is your name?', '');
// alert(answer);

// 演算子
let a = 1, b = 1;
let c = ++a;
let d = b++;
// a=2,b=2,c=2,d=1

let a = 2;
let x = 1 + (a *= 2);
// a=4, x=5

"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1  //
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //infinity
"  -9  " + 5 //  -9  5
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 //NaN // ->-2

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(+a + +b); // 12
// promptによって返却される値の型が、文字列であるため。
