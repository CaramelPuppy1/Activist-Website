//KEY FEATURE: Generate a fact
var factList = [
  "Even if abortion is banned people will still do it, so banning abortion just makes it less safe.",
  "Abortion restrictions cause doctors to refuse care because they are unsure of the legal limits.",
 "Abortion rates are higher in countries where there is limited access to contraception.",
  "Almost every death and injury from unsafe abortion is preventable.",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
// Displays the overlay upon loading
function showOverlay(){

  document.getElementById('overlay').style.display="block";
}
window.addEventListener("load",showOverlay);

// Add event listener to proceed by closing the overlay when clicked
var proceed = document.getElementById("proceed");
proceed.addEventListener("click",closeOverlay);


// Closes the overlay
function closeOverlay(){
  document.getElementById("overlay").style.display="none";
}
