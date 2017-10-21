var px = 500;
var py = 300;
var vx = 5;
var vy = 5;
var d = 100.0;
var col = new Array("violet","indigo","blue","magenta","skyblue","lightgreen","yellow","orange","red","crimson");
var i = 0;
function setup() {
    createCanvas(1000,600);   
}

function draw() {
    background("silver");
    noStroke();
    px = px + vx;
    py = py + vy;
    ellipse(px,py,d,d);
    var v = false;
    if (px-d/2.0 <= 0 || px+d/2.0 >=1000)
    {
        vx *=-1;
        v = true;
    }
    if (py-d/2.0 <= 0 || py+d/2.0 >=600)
    {
        vy *=-1;
        v = true;
        
    }
    if (v)
    {
        if (i < col.length-1 )
        {
            i +=1
        }
        else
        {
            i = 0
        }
    }
    fill(col[i]);
    
    
}

