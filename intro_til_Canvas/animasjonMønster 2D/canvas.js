var canvas  =   document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var fart = 0.05;
var temp = 100;

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(0,0,0,0.04)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    temp = temp + fart;
    for(var i = 0; i<20; i++){
        var x = Math.sin(temp+i*temp/25)*20*i + canvas.width/2;
        var y = Math.cos(temp+i*temp/25)*20*i + canvas.height/2;
        var radius = 5;
        var r = 255;
        var g = Math.round(Math.random()**10)+100;
        var b = 0;
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.strokeStyle = 'rgba('+r+','+g+','+b+',1)';
        c.fillStyle = 'rgba('+r+','+g+','+b+',0.4)';
        c.fill();
        c.stroke();
    }

}

animate();

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
    for(var i = 0; i<20; i++){
        var x = Math.sin(temp+i*temp/25)*20*i + musX;
        var y = Math.cos(temp+i*temp/25)*20*i + musY;
        var radius = 5;
        var r = 255;
        var g = Math.round(Math.random()**10)+100;
        var b = 0;
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.strokeStyle = 'rgba('+r+','+g+','+b+',1)';
        c.fillStyle = 'rgba('+r+','+g+','+b+',0.4)';
        c.fill();
        c.stroke();
    }

}

animate();



