var memeSize = 900;

var canvas = document.getElementById('memecanvas');
ctx = canvas.getContext('2d');

// Set the text style to that to which we are accustomed

canvas.width = memeSize;
canvas.height = memeSize;

//  Grab the nodes
var img = document.getElementById('start-image');
var poema1 = document.getElementById('poema1');
var poema2 = document.getElementById('poema2');
var poema3 = document.getElementById('poema3');
var poema4 = document.getElementById('poema4');
var bottomText = document.getElementById('bottom-text');

// When the image has loaded...
img.onload = function() {
  drawMeme()
}

poema1.addEventListener('keydown', drawMeme)
poema1.addEventListener('keyup', drawMeme)
poema1.addEventListener('change', drawMeme)

poema2.addEventListener('keydown', drawMeme)
poema2.addEventListener('keyup', drawMeme)
poema2.addEventListener('change', drawMeme)

poema3.addEventListener('keydown', drawMeme)
poema3.addEventListener('keyup', drawMeme)
poema3.addEventListener('change', drawMeme)

poema4.addEventListener('keydown', drawMeme)
poema4.addEventListener('keyup', drawMeme)
poema4.addEventListener('change', drawMeme)


bottomText.addEventListener('keydown', drawMeme)
bottomText.addEventListener('keyup', drawMeme)
bottomText.addEventListener('change', drawMeme)

function drawMeme() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img, 0, 0, memeSize, memeSize);

  ctx.lineWidth = 1; // ancho de bordes de texto
  ctx.font = '10pt sans-serif'; // tipo de letra
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  var text1 = document.getElementById('poema1').value;
  text1 = text1.toUpperCase();
  x = 640;
  y = 790;

  wrapText(ctx, text1, x, y, 600, 38, true);

//PRUEBA JASSON
  var text2 = document.getElementById('poema2').value;
  text2 = text2.toUpperCase();
  x = 640;
  y = 810;

  wrapText(ctx, text2, x, y, 600, 28, true);


//FIN PRUEBA


  var text3 = document.getElementById('poema3').value;
  text3 = text3.toUpperCase();
  x = 640;
  y = 830;

  wrapText(ctx, text3, x, y, 800, 38, true);


//PRUEBA JASSON 3

  var text4 = document.getElementById('poema4').value;
  text4 = text4.toUpperCase();
  x = 640;
  y = 850;

  wrapText(ctx, text4, x, y, 800, 38, true);



  ctx.textBaseline = 'bottom';
  var text2 = document.getElementById('bottom-text').value;
  text2 = text2.toUpperCase();
  y = memeSize;

  wrapText(ctx, text2, x, y, 300, 28, true);
  
    ctx.textBaseline = 'bottom';
  var text2 = document.getElementById('bottom-text').value;
  text2 = text2.toUpperCase();
  y = memeSize;

  wrapText(ctx, text2, x, y, 300, 28, true);


}

function wrapText(context, text, x, y, maxWidth, lineHeight, fromBottom) {

  var pushMethod = (fromBottom) ? 'unshift' : 'push';

  lineHeight = (fromBottom) ? -lineHeight : lineHeight;

  var lines = [];
  var y = y;
  var line = '';
  var words = text.split(' ');

  for (var n = 0; n < words.length; n++) {
    var testLine = line + ' ' + words[n];
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;

    if (testWidth > maxWidth) {
      lines[pushMethod](line);
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }
  lines[pushMethod](line);

  for (var k in lines) {
    context.strokeText(lines[k], x, y + lineHeight * k);
    context.fillText(lines[k], x, y + lineHeight * k);
  }

}