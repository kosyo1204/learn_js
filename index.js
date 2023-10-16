'use strict';

let admin;
let name;
name = 'John';
admin = name;
alert(admin);

const EARTH = 'earth';
let ourPlanetName = "Earth"; // 正答例
let guest_name = 'guest';
let currentUserName = "John"; // 正答例
// 前提に認識ズレ。認識ずれをなくす質問→定数をつけるという意味?訪問とはどこに?

const BIRTHDAY = '18.04.1982'; // make uppercase?
const AGE = someCode(BIRTHDAY); // make uppercase?
/* 
  誕生日は誕生日は不変であり、ハードコードされるために大文字で良いが、
  ageは年を重ねるごとに変わりゆくため小文字
*/