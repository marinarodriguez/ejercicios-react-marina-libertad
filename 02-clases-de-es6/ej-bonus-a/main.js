"use strict";

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return Math.pow(this.side, 2);
  }
}

class Square extends Polygon {
    constructor(base){
        super(base);
        this.side = base;
    }
}

class Triangle extends Polygon {
    constructor(base, height){
        super(base, height);
        this.side = base;
    }
    area(){
        return (super.area()) / 2 ;
    }  
}

const square4 = new Square(4);
const triangle = new Triangle(4,3);
console.log(square4.perimeter());
console.log(triangle.area());