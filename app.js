let button = document.createElement('button');
let buttonTxt = document.createTextNode('Add Square');
let div = document.createElement('div');

button.appendChild(buttonTxt);
document.body.appendChild(button);
document.body.appendChild(div);

let id = '0';
button.addEventListener('click', function () {
    let squareDiv = document.createElement('div');
    div.appendChild(squareDiv);

    squareDiv.style.backgroundColor = 'black';
    squareDiv.style.width = '100px';
    squareDiv.style.height = '100px';
    squareDiv.style.cssFloat = 'left';
    squareDiv.className = 'squareDivs';
    squareDiv.setAttribute('id', id);
    id++;

    squareDiv.addEventListener('mouseover', function () {
        console.log('this.id');
        let squareDivTxt = document.createTextNode(this.id);
        squareDiv.appendChild(squareDivTxt);
    });

    squareDiv.addEventListener('mouseout', function () {
        squareDiv.innerText = '';
    });

    squareDiv.addEventListener('click', function () {
        let randomColor = getRandomColor();
        squareDiv.style.backgroundColor = randomColor;
    });

    squareDiv.addEventListener('dblclick', remove);

});

let color = ['blue', 'green', 'purple', 'orange', 'yellow', 'red', 'pink', 'brown'];
function getRandomColor() {
    let randomColor = color[Math.floor(Math.random() * color.length)];
    return randomColor;
}

function remove() {
    if (this.id % 2 === 0) {
        if (this.nextSibling) {
            this.nextSibling.remove();
        } else {
            alert('No following square');
        }
    } else {
        if (this.previousSibling) {
            this.previousSibling.remove();
        } else {
            alert('No prior square');
        }
    }
}