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


// switch
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// if (browser === 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// };

// let a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// switch(a) {
//   case 0:
//     alert( 0 );
//     break;
//   case 1: 
//     alert( 1 );
//     break;
//   case 2:
//   case 3:
//     alert( '2,3' );
//     break;
// };

// function
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }
// // もし else が削除された場合、この関数は違う動きになるでしょうか？

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }
// // これら2つのバリアントの振る舞いで何か違いはあるでしょうか？
// // 違いはない。

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }
// // 1
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
// };
//2
// function checkAge(age) {
//   return (age > 18) || confirm('Do you have your parents permission to access this page?');
// };
// console.log(checkAge(19));

// 2つの数値 a と b で小さい方を返す関数 min(a,b) を書きなさい。
// 例:
// function min(a, b) {
//   let result = (a < b) ? a : b;
//   console.log(result);
// }
// min(2, 5);
// min(3, -1);
// min(1, 1);

// function pow(x, n) {
//   return x ** n;
// }
// let x = prompt('x?');
// let n = prompt('n?');
// console.log(pow(x, n));
// function pow(x, n){
//   let result = x;
//   for (let i=1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// let x = prompt('x?', '');
// let n = prompt('n?', '');
// if (n <= 1) {
//   alertt(`Power  ${n} is not supported.`);
// } else  {
//   alert(pow(x, n));
// }

// // allow
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => { alert("You agreed."); },
//   () => { alert("You canceled the execution."); }
// );

// coding style
// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }

// function pow(x, n) {
//   let result = 1;
  
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if ( n <= 0 ) {
//   alert(`Power ${n} is not supported,
//     please enter an integer number greater than zero`);
// }
// alert( pow(x, n) );

// object
// Helllo, object
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// check empty
// function isEmpty(obj) {
//   let isEmpty = true;
//   for(let key in obj) {
//     if(key in obj) {isEmpty = false};
//   }
//   return isEmpty;
// }
// function isEmpty(obj) {
//   // プロパティがあればブロック内の処理が走るので、returnを返す
//   for(let key in obj) {
//     return false;
//   }
//   return true;
// }

// sum obj property
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0;
// for(key in salaries) {
//   sum += salaries.key;
// }
// return sum;

// function multiplyNumeric(obj) {
//   for(let key in obj) {
//     if (typeof(obj[key]) === 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
// // 呼び出し前
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// // // 呼び出し後
// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: "My menu"
// // };

// // this
// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };
// let user = makeUser();
// alert( user.ref.name ); // John
// // makeUserの実行結果をuserに定義
// // refにはthisが定義されており、このthisには、userが含まれる
// // そのため、user.ref = userで、user.nameとなるため、Johnがリターンされる

// /*
// * makeUserの中のthisの値はundefined。thisはメソッドとして呼ばれた時には値が定義されるが、関数として呼ばれたときはundefinedとなるため。
// * 以下であれば、refはメソッドとなるため、Johnを返す
// */
// function makeUser() {
//   return {
//     name: "John",
//     ref(){
//       return this;
//     }
//   };
// };
// let user = makeUser();
// alert( user.ref().name ); // John

// let calculator = {
//   read() {
//     this.a = Number(prompt('a?', 0));
//     this.b = Number(prompt('b?', 0));
//   },
//   sum() {
//     return(this.a + this.b);
//   },
//   mul() {
//     return(this.a * this.b);
//   },
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// chain
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // 現在の段を表示します
//     alert( this.step );
//   }
// };

// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep();

// // オブジェクト自身をreturnすればOK
// ladder.up().up().down().showStep(); // 1

// コンストラクタ、new演算子
// let obj = {};
// function A() { return obj }
// function B() { return obj }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// function Calculator() {
//   this.read = function() {
//     this.a = Number(prompt('a?', 0));
//     this.b = Number(prompt('b?', 0));
//   }
//   this.sum = function() {
//     return this.a + this.b;
//   }
//   this.mul = function() {
//     return this.a * this.b;
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
// // コンストラクタ関数でreturnする時は、プリミティブだと無視されるのでは？
// // コンストラクタ内のメソッドでreturnしているためにプリミティブでも返せている？

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt('How much to add?', 0);
//   }
// }
// let accumulator = new Accumulator(1); // 初期値 1
// accumulator.read(); // ユーザの入力値の加算
// accumulator.read(); // ユーザの入力値の加算
// alert(accumulator.value); // それらの値の合計を表示

// // methods of primitive
// let str = "Hello";
// str.test = 5;
// alert(str.test);
// // primitiveはオブジェクトではないためエラーとなるか、

// callback
// loadScript(script_file, function(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     loadScript(script_file2, function(error, script) {
//       if (error) {
//         handleError(error);
//       } else {
//         loadScript(script_file3, function(error, script) {
//           if (error) {
//             handleError(error);
//           } else {
//             // ...
//           }
//         })
//       }
//     })
//   }
// })


// promise
// finally
new Promise((resolve, reject) => {

})
// thenの前にstop
// .finally(() => stop)
// .then(result => value, err => err);

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("result"), 2000)
// })
//   .finally(() => alert("Promise ready"))
//   .then(result => alert(result));

// new Promise((resolve, reject) => {
//   throw new Error("error");
// })
//   .finally(() => alert("Promise ready"))
//   .catch (err => alert(err));

// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error("Script load error: " + src));

//     document.head.append(script);
//   });
// }

// let promise = loadScript(url);
// promise.then(
//   script => alert(script.src),
//   error => alert(error.message)
// );
// promise.then(script => alert(''));

// // promiseの再resolve?
// let promise = new Promise(function(resolve, reject) {
//   resolve(1);
//   setTimeout(() => resolve(2), 1000);
// });
// promise.then(alert);
// // executorによる実行結果は1つだけなので、最初のresolveによって渡されたvalueが使われる
// // そのため、1がreturn

// promiseでの遅延
// function delay(ms) {
//   // return new Promise(function(resolve, reject) {
//   //   resolve(ms);
//   // })
  
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// delay(3000).then(() => alert('runs after 3 seconds'));

// Promise chain
// new Promise(function(resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//   return result *2;
// }).then(function(result) {
//   alert(result);
//   return result *2;
// }).then(function(result) {
//   alert(result);
//   return result *2;
// });

// Promise: then vs catch
// promise.then(f1, f2);
// promise.then(f1).catch(f2);
/*
* 2つ目はf1の結果を受けてエラーとなった場合に実行されるが、
* 1つ目はf1の結果を受けず、エラー処理はなされない。
*/
