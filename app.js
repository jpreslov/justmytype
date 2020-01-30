$(document).ready(function() {
  let upKeyboard = $("#keyboard-upper-container");
  let lowKeyboard = $("#keyboard-lower-container");
  let keyList = $(".key");
  let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate"
  ];
  let currentLetterDisplay = $("#target-letter");
  let sentenceDisplay = $("#sentence");
  let highLight = $("#yellow-block");
  let feedBack = $("#feedback");
  let sentenceCounter = 0;
  let letterCounter = 0;
  let numberOfMistakes = 0;

  //show lowercase keyboard by default (bc shift isn't pressed)
  upKeyboard.hide();

  sentenceDisplay.append(sentences[sentenceCounter]);
  currentLetterDisplay.append(sentences[sentenceCounter][letterCounter]);

  let highLightPosition = 15;

  $(document).keydown(function(e) {
    // let moveHighlight = highLight.style.marginLeft = "10px";

    //showing capital keyboard when shift is pressed
    if (e.keyCode == 16) {
      upKeyboard.show();
      lowKeyboard.hide();
    }

    //show current letter being pressed
    if (e.key == sentences[sentenceCounter][letterCounter]) {

      sentenceDisplay.append(`<span></span>`);
      
      letterCounter++;
      highLightPosition = highLightPosition + 16;
      highLight.css("margin-left", `${highLightPosition}px`);
    } else if (
      !e.shiftKey &&
      e.key !== sentences[sentenceCounter][letterCounter]
    ) {
      numberOfMistakes++;
    }
  });

  //highlighting key pressed
  $(document).keypress(function(e) {
    $(`#${e.keyCode}`).css("background-color", "yellow");
  });

  $(document).keyup(function(e) {
    //remove highlight when key unpressed
    let asciiLetter = e.key.charCodeAt(0);

    $(`#${asciiLetter}`).css("background-color", "#f5f5f5");

    //lowercase keyboard when shift unpressed
    if (e.keyCode == 16) {
      upKeyboard.hide();
      lowKeyboard.show();
    }

    if (letterCounter == sentences[sentenceCounter].length) {
      highLightPosition = 15;
      sentenceCounter++;
      letterCounter = 0;
      feedBack.empty();
      sentenceDisplay.empty();
      sentenceDisplay.append(sentences[sentenceCounter]);
    }

    if (letterCounter == sentences[sentenceCounter].length - 1) {
      highLightPosition = 15;
    }
  });
});
