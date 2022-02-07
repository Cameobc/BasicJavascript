//1.Use strict
// added in ES 5
// use this for Valina Javascript;
'use strict';

// 2. Variable
// 변경될 수 있는 값. let(added in ES6) 은 호이스팅 되지 않는다.
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);

//3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function
const count = 17;  // number
const size = 17.1; // number
console.log(`value ${count}, type: ${typeof count}`);
console.log(`value ${size}, type: ${typeof size}`);

//number - speicla numeric valuew: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over(-2*53) ~2*53
console.log(`value ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //templat literals(string)
console.log(`value ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false : 0, null, NaN, undefined, ''
//true: any other value
const canRead = true;
const test = 3< 1;
console.log(`value ${canRead}, type: ${typeof canRead}`);
console.log(`value ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
//주어지는 string 에 상관없이 고유한 식별자를 만들 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol1);
console.log(`value ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
console.log(`value ${ellie.age}, type: ${typeof ellie}`);
ellie.age = 21;
console.log(`value ${ellie.age}, type: ${typeof ellie}`);

//5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value ${text}, type: ${typeof text}`);
text = 1;
console.log(`value ${text}, type: ${typeof text}`);
text = '7' +5;
console.log(`value ${text}, type: ${typeof text}`);
text = '7' / '2';
console.log(`value ${text}, type: ${typeof text}`);
//console.log(text.charAt(0));