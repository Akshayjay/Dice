var random1 = Math.floor(Math.random() * 6) + 1;

var source1 = "images/dice" + random1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", source1);


var random2 = Math.floor(Math.random() * 6) + 1;

var source2 = "images/dice" + random2 + ".png";;

document.querySelectorAll("img")[1].setAttribute("src",source2);


if (random1 > random2) {
  document.querySelector("h1").innerHTML = "🎲 Player 1 WINS!";
}


else if (random2 > random1) {
  document.querySelector("h1").innerHTML = "🎲 Player 2 WINS!";
}


else {
  document.querySelector("h1").innerHTML = "🎲 Its a Draw";
}
