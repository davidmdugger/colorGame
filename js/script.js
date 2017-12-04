// Create var for the number of squares
var numSquares = 6;
// create colors array
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square"),
    pickedColor = pickColor(),
    colorDisplay = document.getElementById("colorDisplay"),
    messageDisplay = document.querySelector("#message"),
    h1 = document.querySelector("h1"),
    resetButton = document.getElementById("reset"),
    modeButtons = document.getElementsByClassName("mode")

for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected"); 
        
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; // if tC = "Easy" then set numSquares to 3 else (:) set numSquares to 6
    });
}

function reset(){
    colors = generateRandomColors(numSquares); // generate new random numbers based on numSquares
    // pick a new random color -- already exists above; Copypasta
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textConten = "New Colors";
    // change the display to an empty striing
    messageDisplay.textContent = "";
    // change colors of squares -- we need to loop through squares again
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    // generate new colors -- already exists above; Copypasta
    colors = generateRandomColors(numSquares);
    // pick a new random color -- already exists above; Copypasta
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    this.textConten = "New Colors";
    // change the display to an empty striing
    messageDisplay.textContent = "";
    // change colors of squares -- we need to loop through squares again
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor; // change the text content of the inner span tag

for(var i = 0; i < squares.length; i++){ // the squares
    squares[i].style.backgroundColor = colors[i]; // for each squares index apply the backgroundColor property and give it the value of the index of the colors array.
    squares[i].addEventListener("click", function(){ // add click event for the square a user clicks
        var clickedColor = this.style.backgroundColor; // store value that user clicks
        if(clickedColor === pickedColor){ /// if clicked color === rgb color
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
        } else{ // if clickedColor !== pickedColor 
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){ // arg needs to === the // do something of the for
    for(var i = 0; i < squares.length; i++){ // loop through all squares
        squares[i].style.backgroundColor = color; // change
    }
}

function pickColor(){
    // create a random var, take Math.random() an multiply by the length of the colors array -- this function will be randomly choosing one of the six values to the correct value; then strip the decimals so we randomly get a number between 0 and 5
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; // sets the random number as the index of the colors array
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++){
        // get random color and push into arr
        arr.push(randomColor()); // build an array for each color
    }
    //return array
    return arr;
}

function randomColor(){
    // pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
