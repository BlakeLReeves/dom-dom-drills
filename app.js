//document.addEventListener('DomContentLoaded', function(){

let button = document.createElement('button');
let buttonTxt = document.createTextNode('Add Square');
let div = document.createElement('div');

button.appendChild(buttonTxt);
document.body.appendChild(button);
document.body.appendChild(div);

let id = 0;
button.addEventListener('click', function(){
    let squareDiv = document.createElement('div');
    div.appendChild(squareDiv);

    squareDiv.style.backgroundColor = 'black';
    squareDiv.style.width = '100px';
    squareDiv.style.height = '100px';
    squareDiv.style.cssFloat = 'left';
    squareDiv.className = 'squareDivs';
    id++;

    squareDiv.addEventListener('mouseover', function(){
        console.log('this.id');
        let squareDivTxt = document.createTextNode(this.id);
        squareDiv.appendChild(squareDivTxt);
    });

    squareDiv.addEventListener('mouseout', function(){
        squareDiv.innerText = '';
    });

    squareDiv.addEventListener('click', function(){
        let randomColor = getRandomColor();
        squareDiv.style.backgroundColor = randomColor;
    })

});

let color = ['blue', 'green', 'purple', 'orange', 'yellow', 'red', 'pink', 'brown'];
function getRandomColor(){
    let randomColor = color[Math.floor(Math.random()*color.lenght)];
    return randomColor;
}

//});
