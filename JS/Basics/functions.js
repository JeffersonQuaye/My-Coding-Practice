///////////     FUNCTIONS     ////////////

//Function Declaration
walk();
function walk() {
    console.log('walk');
}


//Function Expression
let run = function () {
    console.log('run');
};

run();
console.log('\n');

// the difference between a function declaration and a function expression is the declaration can be called before the function is defined while the expression cannot be called before it is defined

//Arguments
function sum(...args) {
    return args.reduce((a , b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));
console.log('\n');

//Default Parameters
//the logical or (||) can be used to set default values to the parameters of can be set within the declaration
function interest(principal, rate = 3.5, years = 5) // setting the default value in the declaration
 {
    rate = rate || 3.5 // Using the logical or (||) to set the default value
    years = years || 5 // Using the logical or (||) to set the default value

    return principal * rate / 100 * years
}

console.log(interest(100000))
console.log('\n');

// Getters And Setters

const person ={
    firstName: 'Jefferson',
    lastName: 'Quaye',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const part = value.split(' ');
        this.firstName = part[0];
        this.lastName = part[1];
    }
};

person.fullName = 'John Smith'

// getters are used to access properties
// setters are used to change or edit them

console.log(person);
console.log('\n');

//Error Handling
const person1 ={
    firstName1: 'Jefferson',
    lastName1: 'Quaye',
    get fullName1(){
        return `${person1.firstName} ${person1.lastName}`
    },
    set fullName1(value){
        if (typeof value !== 'string') {
            throw new Error('Value is not a string');
        }
        const part = value.split(' ');
        if (part.length !== 2) {
            throw new Error('Enter a first and last name')
        }
        this.firstName1 = part[0];
        this.lastName1 = part[1];
    }
};

try {
    person1.fullName1 = null;
} catch (e) {
    console.log(e.message);
}

console.log(person);
console.log('\n');

//Local & Global Scope
const message = 'hi';// this is a global constant or variable because it can be accessed anywhere

function start() {
    const color = 'blue'; //this is a local constant and variables because it can only be accessed in the function or abject it is declared in 

    const message = 'We move'; //local constants and variables take precedents over global constants
    console.log(color);
    console.log(message);
}
//it is best to avoid global variables and constant which can leed to various bug and errors in your program
start();
console.log('\n');

//Let VS Var
function start1(){
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

//the scope of the var key word is not limited to the block it is defined in but hte funtion it is defined in
start1();
console.log('\n');

//The "this" Keyword
//first rule = method -> object
const video = {
    title: 'a',
    tags: ['a', 'b','c'],
    showTags(){
        this.tags.forEach(function(tag) {
            console.log(this.title ,tag);
        }, this);
    }
};

video.showTags();
//second rule = function -> global(window, global)

function playVideo() {
    console.log(this);
}

playVideo();
console.log('\n');