class GetNewFigure {
  constructor(width, height, left, top, radius='0px', color='red') {
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.radius = radius;
    this.color = color;
  }
  draw = function() {
    let div = document.createElement('div');
    div.style.width = this.width+'px';
    div.style.height = this.height+'px';
    div.style.radius = this.radius+'px';
    div.style.left = this.left+'px';
    div.style.top = this.top+'px';
    div.style.position = 'absolute';
    div.style.backgroundColor = this.color;
    div.style.borderRadius = this.radius;
    document.body.append(div);
  }
  set setColor(figcolor) {
    this.color = figcolor;
  }
  get getRadius() {
return this.radius;
  }
  set setRadius(figradius) {
    this.radius = figradius;
  }
}

class Square extends GetNewFigure {
  constructor(width, height, left, top, radius='0px', color){
    super(width, height, left, top, radius, color);
  }
}

const newCircle = new GetNewFigure(200, 200, 200, 150, '50%');
newCircle.setColor = 'purple';
newCircle.setRadius = '55%';
newCircle.draw();
// console.log(newCircle.getRadius);

const sq = new Square(300, 300, 550, 450, '15%');
sq.draw();