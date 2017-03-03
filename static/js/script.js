let beginnerMode = ["this is the first", "this is the second", "this is the third"] 
let userAnswers = [];
let v = 0;

$(document).ready(() => {
  displayStart();
});

function displayStart() {
  $('button.start').click(function() {
    $(this).addClass('button-disappear');
    $('header h1').addClass('h1-disappear');
    addText();
  });
}

function addText() {
  $('section').addClass('section-appear');
  $('section h1').addClass('h1-appear');
  $('section h1').addClass('blinking');
  populateQuestion();
  initiateGame();
  // startTimmer();
}

function initiateGame() {
  $('input[type="text"]').keypress(function(event) {
    if(event.which === 13) {
      let userInput = $(this).val();
      userAnswers.push(userInput);
      console.log(userAnswers);
      $('input[type="text"]').val("");
      v++;
      $('h1.blink').empty();
      populateQuestion();
    }
    checkInput(event)
  });
}

function checkInput(event) {
  let matchString = ['a','e','i','o','u'];

  input = String.fromCharCode(event.which);
  if (matchString.indexOf(input) !== -1) {
    console.log("its a vowel") 
    makeExplosion()
  } else {
    console.log(input);
  }
}
function randomVerticalPosition() {
  return Math.floor(Math.random() * 400)
}
function randomHorizontalPosition() {
  return Math.floor(Math.random() * 800)
}
function explode1() {
  $('div').css({
    "bottom" : randomVerticalPosition() + 'px',
    "left" : randomHorizontalPosition() + 'px',
  });
  $('div').addClass('show-e1');
}
function explode2() {
  $('div').addClass('show-e2');
}
function explode3() {
  $('div').addClass('show-e3');
}
function explode4() {
  $('div').addClass('show-e4');
}
function explode5() {
  $('div').addClass('show-e5');
}
function explode6() {
  $('div').addClass('show-e6');
}
function explode7() {
  $('div').addClass('show-e7');
}
function hideExplosion() {
  $('div').removeClass('show-e1 show-e2 show-e3 show-e4 show-e5 show-e6 show-e7');
}
function makeExplosion() {
  setTimeout(explode1, 0)
  setTimeout(explode2, 100)
  setTimeout(explode3, 200)
  setTimeout(explode4, 300)
  setTimeout(explode5, 400)
  setTimeout(explode6, 500)
  setTimeout(explode7, 600)
  setTimeout(hideExplosion, 700)
}

function populateQuestion() {
  if (v < beginnerMode.length) {
    findQuestion()
  } else {
    let playAgain = window.confirm('Do you want to play again?');
    if (playAgain) { 
      location.reload();
    } else {
    }
  }
}

function findQuestion() {
  $('h1.blink').append(beginnerMode[v]);
  //display input box
  $('input[type="text"]').addClass('input-appear');
  $('input[type="text"]').focus();
}
