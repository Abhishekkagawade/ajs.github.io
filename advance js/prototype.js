//object literls
const person = {
    alive: true
}
const musicien = {
    plays: true
}

musicien.__proto__ = person;
console.log(musicien.plays);
console.log(musicien.alive);
console.log(musicien);
Object.setPrototypeOf(musicien, person)
console.log(Object.getPrototypeOf(musicien))
console.log(musicien.__proto__);
console.log(Object.getPrototypeOf(musicien) === musicien.__proto__)
    //extending the prototype chain====> general  to spacific to more spacific
const sounds = {
    strings: 12,
    __proto__: musicien
}
console.log(sounds.alive)
console.log(sounds.plays)
console.log(sounds.strings)
console.log(sounds)
    //no circuler reference allowed (person.__proto__ can't bre sounds)
    //The __proto__ value must be an object  or null
    //An object can only directly inherit from the object
const car = {
    doors: 2,
    seats: "vinyl",
    get seatMatrials() {
        return this.seats;
    },
    set seatMatrials(material) {
        this.seats = material;
    }
}
const lcar = {};
Object.setPrototypeOf(lcar, car);
lcar.seatMatrials = "gold coated";
console.log(lcar);
console.log(car)
    //walkking up the chain -props and methods are not copied
console.log(lcar.valueOf());
//getting the keys of an object
console.log(Object.keys(lcar));
//loop through each object key
Object.keys(lcar).forEach(key => {
        console.log(key);
    }

);
//But a for ..in loop includes inherited props
for (let key in lcar) {
    console.log(key);
}
//Object Constructor
function Animal(sp) {
    this.sp = sp;
    this.eats = true;

}
Animal.prototype.walks = function() {
    return `A   ${this.sp} is walking `;


};
const Dog = new Animal("Dog");
console.log(Dog.sp)
console.log(Dog.walks());
console.log(Dog.__proto__);
console.log(Dog.__proto__ === Animal.prototype);

//Es6 inheritanced
class vehical {
    constructor() {
        this.wheels = 4;
        this.motorize = true
    }

    ready() {
        return "ready to go--->>>>>"
    }
}
class MotorC extends vehical {
    constructor() {
        super();
        this.wheels = 3;
    }
    wheelies() {
        return "on one wheel Now";
    }
}
const Mbk = new MotorC();
console.log(Mbk);
console.log(Mbk.ready());
console.log(Mbk.wheelies());