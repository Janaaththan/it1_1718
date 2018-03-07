var canvas  =   document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillStyle = 'blue';
//c.fillRect(x, y, bredde, høyde);

//Rektangel
c.fillStyle = 'blue';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'red';
c.fillRect(300, 50, 100, 100);
c.fillStyle = 'white';
c.fillRect(150, 250, 100, 100);
c.fillStyle = 'green';
c.fillRect(400, 300, 100, 100);

//Linjer
c.beginPath();
c.moveTo(75 , 300);
c.lineTo(400 , 300);
c.lineTo(200,100);
c.lineTo(75 , 300);
c.strokeStyle = 'orange';
c.stroke();
c.fillStyle = 'yellow';
c.fill();

//Sirkel (arc)
c.beginPath();
c.arc(500, 150, 75, 0, 2*Math.PI, false);
c.strokeStyle = 'purple';
c.stroke();
c.fillStyle = 'purple';
c.fill();

//Mønster
for(var i = 1; i<1000; i++){
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    c.beginPath();
    c.arc(150, 150+i*10, 75+i*10, 0, 2*Math.PI, false);
    c.strokeStyle = 'rgba('+r+','+g+','+b+',100)';
    c.stroke();
}

//Tilfeldig
for(var i = 0; i<30; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    c.beginPath();
    c.arc(x, y, 25, 0, 2*Math.PI, false);
    c.strokeStyle = 'rgba('+r+','+g+','+b+',100)';
    c.stroke();
}


