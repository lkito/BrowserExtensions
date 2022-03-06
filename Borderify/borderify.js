document.body.style.border = "5px solid red";

var redSquare = document.createElement("div");
redSquare.style.height = '100px';
redSquare.style.width = '100px';
redSquare.style.backgroundColor = 'red';

redSquare.style.position = 'fixed';
redSquare.style.zIndex = '1000';
redSquare.style.top = '50%';
redSquare.style.left = 'calc(50% - 50px)';

document.body.append(redSquare);