var fibonacci = function(number) {
  var n = parseInt(number);
  var initialArray = [0, 1]

  //[0, 1, 1, 2, 3, 5, 8, 13, 21]

  if (n < 1) {
    return false;
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else{
    for(var i = 3; (i <= n); i++) {
      initialArray.push(initialArray[i-2] + initialArray[i-3]);
      console.log(initialArray);
    };
    return initialArray[n-1];
  };
   

};  
 
























/*$(function(){
  $("form#factorial").submit(function(event){
    var number = $("input#number").val();
    var result = factorial(number);
    console.log(result);
    $(".number").text(result);

    $("#result").show();
    event.preventDefault();

  }); 
});
*/
  
