function who_won(choice_1, choice_2) {
  if (choice_1 === choice_2) {
    return -1;
  }
  if (choice_1 === "r") {
    if (choice_2 === "p") {
      return 1;
    } else {
      return 0;
    }
  } else if (choice_1 === "s") {
    if (choice_2 === "p") {
      return 0;
    } else {
      return 1;
    }
  } else {
    if (choice_2 = "r") {
      return 0;
    } else {
      return 1;
    }
  }
};

function declare_winner(result) {
  if (result === 1) {
    alert("The computer won!");
  } else if (result === 0) {
    alert("YOU WON!");
  } else {
    alert("draw.");
  }
};

function RPS(my_choice) {
  var computer_choice = "";
  let rand = Math.random();
  if (rand < 0.33) {
    computer_choice = "s";
  } else if (rand > 0.33 && rand < 0.67) {
    computer_choice = "r";
  } else {
    computer_choice = "p";
  }
  declare_winner(who_won(my_choice, computer_choice));
};

var btn = document.querySelector('#scissors');
btn.onclick = () => RPS("s");

var btn = document.querySelector('#paper');
btn.onclick = () => RPS("p");

var btn = document.querySelector('#rock');
btn.onclick = () => RPS("r");
