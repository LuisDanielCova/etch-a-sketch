const container = document.querySelector(`#container`);

function createGrid(num){
    container.style.setProperty(`--grid-rows`, num);
    container.style.setProperty(`--grid-colums`, num);
    for(let i = 1; i<=num*num; i++){
        let newDiv = document.createElement(`div`);
        newDiv.classList.add(`children`);
        newDiv.addEventListener(`mouseenter`, function (){
            newDiv.style.setProperty(`background-color`, `black`);
        });
        container.appendChild(newDiv);
    }
}

const btn = document.getElementById(`clearCanvas`);
btn.addEventListener(`click`, clearCanvas);

function clearCanvas(){
    const divs = document.querySelectorAll(`.children`);
    divs.forEach(d => d.style.setProperty(`background-color`, `white`));
    let number = +prompt(`How many columns do you want`);
    if(number > 100) number = 100;
    divs.forEach(d => d.remove());
    createGrid(number, `black`);
}

function colorSelector(color){
    switch(color){
        case `black`:
            return `black`;
        case `rainbow`:
            return colorPick();
    }
}

function colorPick(){
    return `rgb(${random()},${random()},${random()})`;
}

function random(){
    return Math.floor(Math.random() * 255);
}

const btnColor = document.querySelectorAll(`.color`);
btnColor.forEach(btn => btn.addEventListener(`click`, function(){
    let divs = document.querySelectorAll(`.children`);
    divs.forEach(div => div.addEventListener(`mouseenter`, function(){
        div.style.setProperty(`background-color`, colorSelector(btn.name));
    }));
}));

const inputColor = document.getElementById(`colorPicker`);
inputColor.addEventListener(`change`, function(){
    let divs = document.querySelectorAll(`.children`);
    divs.forEach(div => div.addEventListener(`mouseenter`, function(){
        div.style.setProperty(`background-color`, inputColor.value);
    }));
})

createGrid(16);