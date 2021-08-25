var canvas = document.getElementById('pookalam');
var ctx = canvas.getContext('2d');

function loadPookalam() {
    ctx.translate(200,200);
    ctx.beginPath();
    ctx.fillStyle = '#ff6';
    ctx.arc(0, 0, 200, 0,  Math.PI * 2, true);                                                                                                                          
    ctx.fill();

    createSlices(150, 12, ctx);
    ctx.stroke();

    ctx.strokeStyle = '#436614';
    ctx.fillStyle = '#eded9f';
    ctx.arc(0,0, 10, 0, Math.PI * 2, true);
    ctx.lineWidth = 22;
    ctx.stroke(); 
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = '#7a1111';
    ctx.arc(0,0, 50, 0, Math.PI * 2, true);
    ctx.lineWidth = 7;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#7a1111';
    ctx.arc(0,0, 104, 0, Math.PI * 2, true);
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#7a1111';
    ctx.arc(0,0, 150, 0, Math.PI * 2, true);
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#ffffb3';
    ctx.arc(0,0, 158, 0, Math.PI * 2, true);
    ctx.lineWidth = 12;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#ff6600';
    ctx.arc(0,0, 182, 0, Math.PI * 2, true);
    ctx.lineWidth = 12;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#7a1111';
    ctx.arc(0,0, 194, 0, Math.PI * 2, true);
    ctx.lineWidth = 12;
    ctx.stroke();

}

function createSlices(r,p,ctx) {
    for(i=0; i<p; i++) {
        ctx.lineWidth=2;
        ctx.rotate(2*Math.PI/p);
        ctx.moveTo(r,0);
        ctx.lineTo(0,0);
        var x=0, y=0;
        var w=300;
        var h=200;
        ctx.arc(0, 0, 150, 200, 2 * Math.PI, false);

        ctx.beginPath();
        ctx.moveTo(x,y); 
        ctx.lineTo(x+w/15, y);
        ctx.lineTo(x+w/30, y+h/64);
        ctx.lineTo(x+w/15, y+h/16);
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'red';
        ctx.moveTo(x+w/15, y+h/32);
        ctx.quadraticCurveTo(x+w/15+w/30, y, x+w*(2/15), y+h/32+h/64);
        ctx.quadraticCurveTo(x+w/15+w/30, y+h/64+h/64, x+w/15, y+h/32);
        ctx.stroke();
        ctx.fill(); 
        ctx.closePath();

        ctx.rect(40, 40, 30, 30);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fill(); 

        ctx.beginPath();
        ctx.fillStyle = '#436614';
        ctx.fillRect(75, 75, 30, 30);
    }
}
