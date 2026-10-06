export class Shape {

  calculateArea() {
    return 0;
  }

  calculateParameter() {
    return 0;
  }

  toString() {
    return `Area = ${this.calculateArea()}, Parameter = ${this.calculateParameter()}`;
  }

}


export class Rectangle extends Shape {

  constructor(width, height) {
    super();

    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculateParameter() {
    return 2 * (this.width + this.height);
  }

  toString() {
    return `Rectangle: Width = ${this.width}, Height = ${this.height}, Area = ${this.calculateArea()}, Parameter = ${this.calculateParameter()}`;
  }

}


export class Square extends Shape {

  constructor(side) {
    super();

    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }

  calculateParameter() {
    return 4 * this.side;
  }

  toString() {
    return `Square: Side = ${this.side}, Area = ${this.calculateArea()}, Parameter = ${this.calculateParameter()}`;
  }

}


export class Circle extends Shape {

  constructor(radius) {
    super();

    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculateParameter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle: Radius = ${this.radius}, Area = ${this.calculateArea()}, Parameter = ${this.calculateParameter()}`;
  }

}