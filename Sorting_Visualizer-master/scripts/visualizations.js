var speed = 1000;

inp_aspeed.addEventListener("input", vis_speed);

function vis_speed() {
  var array_speed = inp_aspeed.value;
  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }

  delay_time = 10000 / (Math.floor(array_size / 10) * speed); //Decrease numerator to increase speed.
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed); //Decrease numerator to increase speed.
var c_delay = 0; //This is updated ov every div change so that visualization is visible.

function div_update(cont, height, color) {
  let gradient = "";
  // Use gradients for special colors
  if (color === "red") {
    gradient = "linear-gradient(180deg, #ff5858 0%, #ff0000 100%)";
  } else if (color === "yellow") {
    gradient = "linear-gradient(180deg, #ffe259 0%, #ffa751 100%)";
  } else if (color === "green") {
    gradient = "linear-gradient(180deg, #43e97b 0%, #38f9d7 100%)";
  } else if (color === "blue") {
    gradient = "linear-gradient(180deg, #3a8dde 0%, #005bea 100%)";
  } else {
    gradient = color;
  }
  window.setTimeout(function () {
    cont.style =
      "margin:0% " +
      margin_size +
      "% ; width:" +
      (100 / array_size - 2 * margin_size) +
      "% ; height:" +
      height +
      "% ; background: " +
      gradient +
      "; border-radius: 8px 8px 0 0; transition: background 0.2s, box-shadow 0.2s, transform 0.2s; box-shadow: 0 2px 8px rgba(58,141,222,0.10);";
  }, (c_delay += delay_time));
}

function enable_buttons() {
  window.setTimeout(function () {
    for (var i = 0; i < butts_algos.length; i++) {
      butts_algos[i].classList = [];
      butts_algos[i].classList.add("butt_unselected");

      butts_algos[i].disabled = false;
      inp_as.disabled = false;
      inp_gen.disabled = false;
      inp_aspeed.disabled = false;
    }
  }, (c_delay += delay_time));
}
