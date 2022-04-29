class circle {
  constructor(radius) {
    this.radius = radius;
  }
  get Radius() {
    return this.radius;
  }

  set Radius(Radius) {
    this.radius = Radius;
  }

  get Diameter() {
    return this.radius * 2;
  }

  get Square() {
    return this.calcSquare();
  }
  calcSquare() {
    return 3.14 * (this.radius * this.radius);
  }
  get Length() {
    return this.calcLength();
  }

  calcLength() {
    return 3.14 * this.Diameter;
  }
}
const circleOne = new circle(8);
console.log(circleOne.radius);

circleOne.radius = 6.5;
console.log(circleOne.radius);
console.log(circleOne.Diameter);
console.log(circleOne.Square);
console.log(circleOne.Length);

const circleTwo = new circle(2);
console.log(circleTwo.radius);
console.log(circleTwo.Diameter);
console.log(circleTwo.Square);
console.log(circleTwo.Length);
