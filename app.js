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
    let keyElNum = parseInt(getKeyEl[0].id, 10);

    if (kC == 16) {
      upKeyboard.show();
      lowKeyboard.hide();
    }

    // trying to highlight current key on keyboard without a loop
    if (kC !== undefined) {
      if (e.keyCode === keyElNum) {
        getKeyEl.css("background-color", "yellow");
      }
    }

    //highlighting key pressed
    console.log(e.keyCode);
    console.log(keyElNum);

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
