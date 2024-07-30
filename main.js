let canvas = document.getElementById("canvas");

// console.log(window.innerHeight);
// console.log(window.innerWidth);

canvas.height = window.innerHeight ;
canvas.width = window.innerWidth ;

window.addEventListener("resize",()=>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

let c = canvas.getContext("2d");


// c.fillRect(20,20, 0, 0);

let colorArray = ["#991D7A", "#E6CE5A", "#E642BE", "#2CE6E4", "#259998"];

    // console.log(dx, dy);
     

    class Square{
        constructor(x,y,dx,dy) {
this.x = x;
this.y = y;
this.dx = dx;
this.dy = dy;
this.colorSq = colorArray[Math.floor(Math.random() * colorArray.length)];
        }

        drawSquare(){
 c.fillRect(this.x, this.y, 100, 100);
c.fillStyle = this.colorSq
 
        }

      updateSquare(){
  if (this.x + 100 > canvas.width || this.x < 0) {
    this.dx = -this.dx;
  }

  if (this.y + 100 > canvas.height || this.y < 0) {
    this.dy = -this.dy;
  }
  this.x += this.dx;
  this.y += this.dy;
  this.drawSquare();
      }
}
 


class Circle{
  constructor(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    
  }
  drawCircle(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  updateCircle(){
      if (this.x + 30 > canvas.width || this.x < 30) {
        this.dx = -this.dx;
      }

      if (this.y + 30 > canvas.height || this.y < 30) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.drawCircle();
  }
}


   

    let arraySquare = [];

    for(let i = 0; i <200; i++){
      // let x = Math.floor(Math.random() * (innerWidth - 200)+50);
      // let y = Math.floor(Math.random() * (innerHeight - 200)+50);
      // let dx = (Math.random() - 0.5)*3;
      // let dy = (Math.random() - 0.5)*3;
      // let radius = Math.floor((Math.random()+5)*3)
      //  let neSq = new Square(x, y, dx, dy);
      //  arraySquare.push(neSq);
    let radius = 30;
  let x = Math.floor(Math.random() * (innerWidth - 2 * radius) + radius);
  let y = Math.floor(Math.random() * (innerHeight - 2 * radius) + radius);
      let dx = (Math.random() - 0.5) * 3;
      let dy = (Math.random() - 0.5) * 3;
      // let radius = Math.floor((Math.random() + 5) * 3);
  
console.log(radius);
      let neCi = new Circle(x, y, dx, dy, radius);

      arraySquare.push(neCi);
    }


function animate() {
    
  requestAnimationFrame(animate);
   c.clearRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < arraySquare.length; i++) {
    // arraySquare[i].updateSquare();
    arraySquare[i].updateCircle();
}

}

     animate();



