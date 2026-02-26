//// ADDRESS OBJECT EXERCISE  ////
const address = {
    street: 'Yomo Kutorkor Street',
    city: 'Accra',
    zipCode: 233
}

showAddress(address);

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

//// ADDRESS FACTORY OBJECT AND CONSTRUCTOR EXERCISE ////

//Factory Function
function createAddress(street, city, zipCode) {
    return{
        street,
        city,
        zipCode
    }
}

console.log(createAddress('Yomo Kutorkor Street', 'Accra', 233));

//Constructor Function
function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

console.log(new CreateAddress('Yomo Kutorkor Street', 'Accra', 233));


//// OBJECT EQUALITY EXERCISE ////
let address1 = new CreateAddress('a', 'b', 'c');
let address2 = new CreateAddress('a', 'b', 'c');


function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2)); // true
console.log(areSame(address1, address2)); // false

////  BLOG POST EXERCISE  ////

const blogPost = {
    title: 'Classroom of the Elite',
    body: 'A story about a high school were there is the battle for the elite classroom.',
    author: 'Syougo Kinugasa',
    views: 800000,
    comments: [
        {author: 'John Doe', body: 'This is a great book!'},
        {author: 'John Doe', body: 'This is a great book!'},
        {author: 'John Doe', body: 'This is a great book!'}
    ],
    isLive: true
}

function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new BlogPost('Classroom of the Elite', 
    'A story about a high school were there is the battle for the elite classroom.', 
    'Syougo Kinugasa');

console.log(blogPost);
showAddress(blogPost);

console.log(post);

//// PRICE RANGE EXERCISE  ////

const priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
]