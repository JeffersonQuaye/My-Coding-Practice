class Shape{
    move(){
        console.log('move');
    }
}

class Circle extends Shape{
    draw(){
        console.log('draw');
    }
}

const circle = new Circle();