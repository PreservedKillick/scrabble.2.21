var letterValues = function(letter) {
  letter = letter.toUpperCase();
  var alphabet = { 'A' :1, 'E':1, 'I':1, 'O':1, 'U':1, 'L':1, 'N':1, 'R':1, 'S':1, 'T':1,
    'D' : 2, 'G': 2,
    'B' : 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H' : 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5, 'J': 8, 'X': 8, 'Q': 10, 'Z': 10};
    return alphabet[letter];
};


var scrabble = function(word) {
  var regExp = /[a-zA-Z]/;
  if (word === '') {
    return 0;

  } else if (regExp.test(word) === false) {
    alert("Please enter a real word.");
    
  } else {
    var letter = word.substr(0,1);
    var newWord = word.substr(1);
  }
  
  return letterValues(letter) + scrabble(newWord);
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
