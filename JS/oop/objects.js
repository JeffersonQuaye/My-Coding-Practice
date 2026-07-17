//Object Literal Syntax
console.log('Object Literal Syntax');
const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};
circle.draw();
console.log('\n');

//Factory Function Object
console.log('Factory Function Object');
function createCircle(radius) {
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
circle.draw();
console.log('\n');

//Constructor Function Object
console.log('Constructor Function Object');
function Circle(radius) {
    this.radius = radius;
    let defaultLoaction = {x: 0, y: 0};
    this.draw = function(){
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLoaction;
        },
        set: function(value){
            defaultLoaction = value;
        }
    });
}

const circle2 = new Circle(1);
circle1.draw();


circle2.location = {x: 1};
console.log(circle2);

for (let key in circle2) {
    console.log(key, circle2[key]);
}

console.log(Object.keys(circle2));

// Every object has a constructor property that references the function that was used to create the object
// In JS functions are objects

//Primitives are copied by value
//Objects are copied by reference
//Abstraction principle off oop is to HIDE THE DETAILS AND ONLY EXPOSE THE ESSENTIALS