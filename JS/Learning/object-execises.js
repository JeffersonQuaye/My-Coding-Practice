// ADDRESS OBJECT EXERCISE
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

// ADDRESS FACTORY OBJECT AND CONSTRUCTOR EXERCISE

function createAddress(street, city, zipCode) {
    return{
        street,
        city,
        zipCode
    }
}

console.log(createAddress('Yomo Kutorkor Street', 'Accra', 233));

function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

console.log(new CreateAddress('Yomo Kutorkor Street', 'Accra', 233));