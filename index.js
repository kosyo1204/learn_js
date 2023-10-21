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
// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// a=2,b=2,c=2,d=1

// let a = 2;
// let x = 1 + (a *= 2);
// a=4, x=5

// "" + 1 + 0 //10
// "" - 1 + 0 //-1
// true + false //1  //
// 6 / "3" //2
// "2" * "3" //6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 //$45
// "4" - 2 //2
// "4px" - 2 //NaN
// 7 / 0 //infinity
// "  -9  " + 5 //  -9  5
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 //NaN // ->-2

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(+a + +b); // 12
// promptによって返却される値の型が、文字列であるため。

// 比較
// 5 > 4 true
// "apple" > "pineapple" false
// "2" > "12" true 文字列同士なので辞書の比較を行う
// undefined == null true
// undefined === null false
// null == "\n0\n" false
// null === +"\n0\n" false

// 条件分岐
// if ("0") {
//   alert( 'Hello' );
// } 
// 文字列なので表示される。数字の0なら表示されない。

// const answer = prompt("What's the “official” name of JavaScript?", "");
// if (answer == 'ECMAScript') {
//   alert('Right!');
// } else {
//   alert("You don't know? “ECMAScript”!");
// };

// const input = prompt('Type a number', '0');
// if (input == 0) {
//   alert(0);
// } else if (input > 0) {
//   alert(1);
// } else {
//   alert(-1);
// }

// let result = (a + b < 4) ? 'Below' : 'Over';

// let message = (login == 'Employee') ? 'Hello' :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' : '';

// logical operators
// alert( null || 2 || undefined ); // 2
// alert( alert(1) || 2 || alert(3) ); //1 -> 2の順に表示される。
// alertを読んだ結果はundefiendとなるが、alert自体は実行されるため、1。
// alert( 1 && null && 2 ); // null falseとなる場合の値を返却する
// alert( alert(1) && alert(2) ); //1 -> undefined
// alert( null || 2 && 3 || 4 ); // 3
// 包括的に age が 14 と 90 の間かをチェックする if 条件を書きなさい。
// “包括的に” は age が 14 または 90 の端に到達できることを意味します。
// if (age >= 14 && age <= 90) {}
// if (!(age >= 14 && age <= 90)) {}
// if (age < 14 || age > 90) {}

// if (-1 || 0) alert( 'first' ); true
// if (-1 && 0) alert( 'second' ); false
// if (null || -1 && 1) alert( 'third' ); true

// loop
// let i = 3;
// while (i) {
//   alert( i-- );
// }
// 最後は1。次のイテレーションでは0で、0はfalseを意味するため。

// let i = 0;
// while (++i < 5) alert( i );
// // 1 ~ 4
// let i = 0;
// while (i++ < 5) alert( i );
// // 1 ~ 5
// // プレフィックス、ポストフィックス

// for (let i = 0; i < 5; i++) alert( i );
// for (let i = 0; i < 5; ++i) alert( i );
// // 同じ0~4。stepが入るため。前の問題は評価のために使っているが、ここでは異なる。

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) { 
//     alert(i);
//   };
// }

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// let i = 0
// while(i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// let input = prompt('number', '');
// while (input <= 100) { continue; };
// // エンドレスで処理が走る

// let num;
// do {
//   num = prompt("number", 0);
// } while (num <= 100 && num);
// 入力値を使ってループさせるときは do whileがいいのかも。

// for (let n=2; n < 10; n++) {
//   if (n == 2) {return n};
//   if (n % 2 == 0 ) { continue };
//   if (n % 3 == 0 ) { continue };
// }
// 素数の範囲を絞らなければ難易度高すぎるのでは。。
