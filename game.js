let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.round((Math.random() * 3));
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
}

