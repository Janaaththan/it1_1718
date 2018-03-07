var canvas  =   document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var fart = 0.05;
var temp = 100;
var musX = canvas.width/2;
var musY = canvas.height/2;
c.canvas.addEventListener('mousemove', function (e) {
    musX = e.clientX;
    musY = e.clientY;
});
function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(0,0,0,0.04)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    temp = temp + fart;
    for(var i = 0; i<5; i++){
        var x = Math.sin(temp+i*temp/25)*50*i + musX;
        var y = Math.cos(temp+i*temp/25)*50*i + musY;
        var radius = 3;
        var r = Math.round(Math.random()*20*i);
        var g = 0;
        var b = Math.round(Math.random()*10)+100;

        c.beginPath();
        c.arc(x, y, radius*10, 0, 2*Math.PI, false);
        c.strokeStyle = 'rgba('+r+','+g+','+b+',100)';
        c.stroke();
    }
}

animate();


