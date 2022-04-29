let buttonColors = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];
let userClickedPattern = [];

let started = false;

let level = 0;

$(document).keypress(function (e) {

    if (e.key.toLowerCase() === 'a' && !started) {
        $('#level-title').text('Level ' + level);
        nextSequence();
        started = true;
    }
});

$('.btn').click(function() {

    // let userChosenColor = e.target.id;
    let userChosenColor = $(this).attr('id'); // $(this) = targets the element with btn class, then finds the attr id of the btn element
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log('success')
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log('wrong');

        playSound("wrong");

        $('body').addClass('game-over');
        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 200);

        $('#level-title').text('Game Over, Press Any Key to Restart');
    }
}

function nextSequence() {

    userClickedPattern = [];
    level++;
    $('#level-title').text('Level ' + level);

    let randomNumber = Math.round((Math.random() * 3));
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(150).fadeIn(150).fadeIn(150);
    playSound(randomChosenColor);
}

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColor) {

    $('#' + currentColor).addClass('pressed');
    setTimeout(function () {
        $('#' + currentColor).removeClass('pressed');
    }, 100);
};
