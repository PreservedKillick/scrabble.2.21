var letterValues = function(letter) {
  var onePointLetters = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
  var twoPointLetters = ['D', 'G'];
  var threePointLetters = ['B','C','M','P'];
  var fourPointLetters = ['F','H','V','W','Y']; 
  letter = letter.toUpperCase();

  if (onePointLetters.indexOf(letter) > -1) {
    return 1;
  } else if (twoPointLetters.indexOf(letter) > -1) {
    return 2;
  } else if(threePointLetters.indexOf(letter) > -1) {
    return 3;
  } else if (fourPointLetters.indexOf(letter) > -1) {
    return 4;
  } else if (letter === 'K') {
    return 5;
  } else if (letter === 'J' || letter === 'X') {
    return 8;
  } else if (letter === 'Q' || letter === 'Z') {
    return 10;
  } else {
    return 0;
  }
};


var scrabble = function(word) {
  if (word === '') {
    return 0;
  } else {

    var letter = word.substr(0,1);
    var newWord = word.substr(1);

    return letterValues(letter) + scrabble(newWord);
  }
};




$(function() {
  $('form#scrabble').submit(function(event) {
    var word = $('input#word').val();
    var result = scrabble(word);
    $(".points").text(result);

    $('#result').show();
    event.preventDefault();
  });
});
