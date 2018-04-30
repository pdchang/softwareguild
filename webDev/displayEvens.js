//entry not numeric
//step is not positive
//end number is less than or equal to starting number
function display(){
  var start = Number(document.forms["even"]["startnum"].value);
  var end = Number(document.forms["even"]["endnum"].value);
  var step = Number(document.forms["even"]["stepnum"].value);

  console.log(start);
  console.log(end);
  console.log(step);
  if (isNaN(start)){
    alert("You didn't enter a number");
    return false;
  }
  if (isNaN(end)){
    alert("You didn't enter a number");
    return false;
  }
  if (isNaN(step)){
    alert("You didn't enter a number");
    return false;
  }
  if (step < 0){
    alert("step is not a positive number");
    return false;
  }
  if (start > end){
    console.log(start > end);
    alert("you can't enter a end number less than the start");
    return false;
  }
  document.getElementById("stuff").innerHTML = "Here are the even numbers between " + start + " and " + end + " by " + step +"'s" ;
  for (var i = start; i < end; i+= step){
    console.log(i);
    if (i % 2 == 0){
      document.getElementById("result").innerHTML += i + "<br />";
    }
  }

  return false;
}
