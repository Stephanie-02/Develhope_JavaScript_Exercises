class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  
  static calculate(param1) {
    if (param1 instanceof Square) {
      return(param1.side*param1.side);
    } else if(param1 instanceof Rectangle){
      return(param1.width*param1.height);
    } else {
      return(Math.PI*param1.radius*param1.radius)
    }
  }
  
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));