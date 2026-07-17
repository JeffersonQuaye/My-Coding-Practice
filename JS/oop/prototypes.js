////     PROTOTYPES     ////
////     PROTOTYPES     ////

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function(){
    console.log('draw');
};

const circle = new Circle(7);

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}

let person = { name: 'Jefferson'}

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
});

person.name = 'Sena'

for (const key in person) {
    console.log(key);
}

////    PROTOTYPICAL INHERITANCE    ////
////    PROTOTYPICAL INHERITANCE    ////

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child; //resetting the constructor function after resetting the prototype.///
}

function Shape() {
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}


function Circle1() {
}

extend(Circle1, Shape);

Circle1.prototype.duplicate = function(){
    //This is when you override the method in a parent object when a particular child object needs the same method but different implimentation. You also need to put it after you extend so that it does not disappear
    console.log('duplicate circle');
}

function Square() {
    
}

extend(Square, Shape);

Square.prototype.duplicate = function(){
    console.log('duplicate square');
}

const shapes = [
    new Circle1(),
    new Square()
]

for (let shape of shapes) {
    shape.duplicate();
}

////    MIXINS    ////  
////    MIXINS    ////

function mixin(target, ...sources) {
    Object.assign(target, ...sources);    
}

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function(){
        console.log('walking');
    }
};

const canSwim = {
    swim: function(){
        console.log('swim');
    }
}

function Person(){

}

mixin(Person.prototype, canEat, canWalk);
const person1 = new Person();
console.log(person1);


function Goldfish() {    
}

mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);


function Duck() {    
}

mixin(Duck.prototype, canEat, canWalk, canSwim);
const duck = new Duck();
console.log(duck);