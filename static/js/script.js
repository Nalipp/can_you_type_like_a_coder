let beginnerMode = ["h1", "main.css", "href='www.happy.com'"] 
let hellMode = ["var = 4 * 9", "5 % 2 !== 8", "regex = \\[^abc]\\"]
let mode = beginnerMode;
let userAnswers = [];

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
  let v = 0;
  populateQuestion(v);
}

function populateQuestion(v) {
  if (v < mode.length) {
    findQuestion(v) 
  } else {
    playAgain();
  }
}

function findQuestion(v) {
  $('h1.blink').append(mode[v]);
  //display input box
  $('input[type="text"]').addClass('input-appear');
  $('input[type="text"]').focus();

  $('input[type="text"]').keypress(function(event) {
    if(event.which === 13) {
      let userInput = $(this).val();
      userAnswers.push(userInput);
      console.log(userAnswers);
      $('input[type="text"]').val("");
      v = v + 1
      $('h1.blink').empty();
      populateQuestion(v)
    }
  });
}

function playAgain() {
  window.alert('Do you want to play again?');
}
