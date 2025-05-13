
// Button clicked
const btnButton = document.getElementById("button");
btnButton.addEventListener('click', ()=> {
    alert('Button Clicked!'); 
});


// hover effects
const hover = document.getElementById("hoverText");
hover.onmouseover = function(){
    hover.style.color = 'red';
    hover.style.fontWeight = 'bold';
};

hover.onmouseout = function(){
    hover.style.color = 'black';
    hover.style.fontWeight = 'normal';
};

// Keypress detection
document.getElementById('keyPress').addEventListener('click', (e)=> {
    console.log(`Key pressed: ${e.key}`);
});

// double clicked
const doubleBtn = document.getElementById('doubleBtn');
doubleBtn.addEventListener('dblclick', ()=> {
    alert('You did it! Double clicked!'); 
});

