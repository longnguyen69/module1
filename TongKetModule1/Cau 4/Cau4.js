function Circle(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
}
function render(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let circle= new Circle(10, 10, 100, "#000000");
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = circle.color;
    ctx.fill();
}

render();

