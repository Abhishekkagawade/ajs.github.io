//pure function 
// clean code ,easy to  debug and test
//rules
//A same input always gives same output
//no side effect
const add = (x, y) => x * y;
console.log(add(3, 87));
const fullname = (first, second) => `${first} ${second}`;
console.log(fullname("rajahuli", "bahubali"));
// a pure function having at lest one parameter
//no side effect
const z = 5;
const sum = (x, y) => x + y + z;
console.log(sum(4, 8))
    //cannot accese api, db,file system modify DOM or Even log to the console
    //impure fn
let x = 1;
const increment = () => x += 1;
console.log(increment());
console.log(x);
console.log(increment() === x)
    //Impure Functions
const Myarr = [1, 2, 3];
const addT = (array, data) => {
    array.push(data);
    return array;

}
console.log(addT(Myarr, 7));
console.log(Myarr);
const PureInc = (num) => num += 1;
console.log(PureInc(x));
console.log(x);


const OneTOFive = [1, 2, 3, 4, 5];
const Odd = OneTOFive.filter(r => r % 2 != 0);
console.log(Odd);
const OneTOFiv = [1, 2, 3, 4, 5];
const Od = OneTOFiv.map(r => r * 5);
console.log(Od);
console.log(OneTOFive);


//Functional Programming
//A heigher order function  which takes a function as an argument .return a function ,or both
const add2 = (e) => e + 2;
const Sub1 = (e) => e - 1;
const Multi = (e) => e * 5;