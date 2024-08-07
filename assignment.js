let total = null;
let quant = null;
let me = prompt("what is your name");
alert("Welcome to The Place restaurant");
alert(`Welcome ${me} what would you like`);
let menu = prompt("Rice \t Swallow \n Water\t Spag \n Drinks");
if (menu == "water") {
  quant = Number(prompt('How many bottles?'));
  console.log(typeof quant);
  let priceOfwater = 100;
  total = quant * priceOfwater;
  alert(`Thank you for coming ${me} your total price is ${total}`);
}

switch (menu) {
  case "rice":
    quant = Number(
      prompt(
        `How many plates do you want ${me}? Buy more than 3 to qualify for discount price.`
      )
    );
    total = quant * 500;
    if (quant >= 3) {
      alert(`${me} your total is ${total * 0.1}. Thank You!`);
    } else {
      alert(`${me} your total is ${total}. Thank you!`);
    }
    break;

  case "swallow":
    quant = Number(prompt(`How many plates do you want ${me}`));
    total = quant * 100;
    if (quant >= 5) {
      alert(`${me} your total is ${total * 0.15}`);
    } else {
      alert(`${me} your total is ${total}`);
    }
    break;

  case "spag":
    quant = Number(prompt(`How many plates do you want ${me}`));
    if (quant >= 10) {
      total = quant * 2000;
      alert(`${me} your total is ${total * 0.2}`);
    } else {
      alert(`${me} your total is ${total}`);
    }
    break;

  case "drinks":
    quant = Number(prompt(`How many drinks do you want ${me}`));
    total = quant * 600;
    if (quant >= 10) {
      alert(`${me} your total is ${total * 0.2}`);
    } else {
      alert(`${me} your total is ${total}`);
    }
    break;
}
