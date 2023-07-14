//Laxical Scope defines how variable are resolved in nested function

//nested (child) function have access to the  scope of their parent fnn

//globle scp
let x = 1;
const parentFun = () => {
    //local scp
    let Myvalue = 3;
    console.log(x);
    console.log(Myvalue);
    const childFun = () => {
        console.log(x += 5);
        console.log(Myvalue += 1)
    }
    childFun();
}
parentFun();
//CLOSURE :A closure is a Function having  access  to the parent scope,even after the parent-function has closed,
//closure is created when we define a function ,not when a function is executed
let y = 1;
const parentFun1 = () => {
    //local scp
    let Myvalue = 3;
    console.log(y);
    console.log(Myvalue);
    const childFun = () => {
        console.log(y += 5);
        console.log(Myvalue += 1)
    }
    return childFun;
}
const result = parentFun1();
console.log(result)
result();
result();
result();
console.log(x);
//console.log(Myvalue) //ref error due to private Variable
//IIFE(imidetly invoked function)
const privateCounter = (() => {
    let count = 0;
    console.log(`intial value:${count}`);
    return () => {
        count += 1;
        console.log(count)
    }

})();
privateCounter();
privateCounter();
privateCounter();
const credits = ((num) => {
    let credits = num;
    console.log(`intial credits value: ${credits}`);
    return () => {
        credits -= 2;
        if (credits > 0) console.log(`playing game,${credits} Credits`)
        if (credits <= 0) console.log('not enough creduts')
    }
})(3)
credits();
credits();
credits();