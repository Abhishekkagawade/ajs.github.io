//Functional Programming
//A heigher order function  which takes a function as an argument .return a function ,or both
const add2 = (e) => e + 2;
const Sub1 = (e) => e - 1;
const Multi = (e) => e * 5;
const result = Multi(Sub1(add2(5)));
console.log(result);
//make oure composed function 
const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val)
const compR = compose(Multi, Sub1, add2)(4)
console.log(compR);
const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);
const pipeR = pipe(add2, Sub1, Multi)(5);
console.log(pipeR);
const pipeR1 = pipe(add2, Sub1, Multi)(7);
console.log(pipeR1);
//ex with 2 parameter
const divde = (div, num) => num / div;
const pipeR3 = pipe(add2, Sub1, Multi, e => divde(4, e))(4);
console.log(pipeR3);
const lorem = "hii wel come  in engg"
const SplitOnSpcae = (string) => string.split(' ');
const count = (array) => array.length;
const wordC = pipe(
    SplitOnSpcae, count
);
console.log(wordC(lorem));
//clone the object before an impure fn matches it
const scoreObj = { home: 0, away: 0 };
const ShallowClone = (obj) => Array.isArray(obj) ? [...obj] : {...obj };
const incrementHome = (obj) => {
    obj.home += 1;
    return obj;
};
const homeScore = pipe(
    ShallowClone,

    incrementHome
);
console.log(homeScore(scoreObj));
console.log(scoreObj);
console.log(homeScore(scoreObj) === scoreObj)