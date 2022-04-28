let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.round((Math.random() * 3));
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(150).fadeIn(150).fadeIn(150);

    var audio = new Audio('sounds/' + randomChosenColor + '.mp3');
    audio.play();
}

$('.btn').click(function(e) {
    let userChosenColor = e.target.id;
    console.log(userChosenColor);

    userClickedPattern.push(userChosenColor);
})

nextSequence();