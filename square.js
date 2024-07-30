let canvas = document.getElementById("square");


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});


let c = canvas.getContext("2d");


let colorArray = ["#1A1F4A", "#FF7069", "#C0D99A", "#2BB0BF", "#B4E5F2"];


    class Square {
      constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.colorSq =
          colorArray[Math.floor(Math.random() * colorArray.length)];
      }

      drawSquare() {
        c.fillRect(this.x, this.y, 100, 100);
        c.fillStyle = this.colorSq;
      }

      updateSquare() {
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


        let arraySquare = [];


            for (let i = 0; i < 200; i++) {
              let x = Math.floor(Math.random() * (innerWidth - 200)+50);
              let y = Math.floor(Math.random() * (innerHeight - 200)+50);
              let dx = (Math.random() - 0.5)*3;
              let dy = (Math.random() - 0.5)*3;
              let radius = Math.floor((Math.random()+5)*3)
               let neSq = new Square(x, y, dx, dy);
               arraySquare.push(neSq);

              arraySquare.push(neSq);
            }


            function animate() {
              requestAnimationFrame(animate);
              c.clearRect(0, 0, canvas.width, canvas.height);

              for (let i = 0; i < arraySquare.length; i++) {
                arraySquare[i].updateSquare();
              }
            }

            animate();