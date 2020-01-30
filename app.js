$(document).ready(function() {
  let upKeyboard = $("#keyboard-upper-container");
  let lowKeyboard = $("#keyboard-lower-container");
  let keyList = $(".key");

  //show lowercase keyboard by default (bc shift isn't pressed)
  upKeyboard.hide();

  //showing capital keyboard when shift is pressed
  $(document).keydown(function(e) {
    let kC = e.keyCode;
    let getKeyEl = $("#" + kC);

    if (kC == 16) {
      upKeyboard.show();
      lowKeyboard.hide();
    }

    //highlighting key pressed
    if (e.key === getKeyEl.innerHTML){getKeyEl.css("background-color", "yellow")}
    console.log(getKeyEl.innerHTML)

    // for (let i = 0; i < keyList.length; i++) {
    //   if (e.key == keyList[i].innerText) {
    //     $(keyList[i]).css("background-color", "yellow");
    //   }
  });

  //lowercase keyboard when shift unpressed
  $(document).keyup(function(e) {
    if (e.keyCode == 16) {
      upKeyboard.hide();
      lowKeyboard.show();
    }

    //remove highlight when key unpressed
    for (let i = 0; i < keyList.length; i++) {
      if (e.key == keyList[i].innerText) {
        $(keyList[i]).css("background-color", "");
      }
    }
  });
});
