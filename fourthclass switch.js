let nnpcPrice = parseInt(prompt('what is the price of nnpc'));
let quant = null;
let total = null;
switch (nnpcPrice){
    case 65:
        alert('Buy 1000 liters');
        quant = parseInt(prompt('How many liters do you want to buy?'));
        total = quant * 65;
        if (quant > 1000 && quant < 2000){
            alert(`Your total is ${total * 0.2}`);
        } else{
            alert('You do not qualify for discount. total is: ' + total);
        }
        break;
        case 145:
            alert ('buy 800 liters');
            break;
            case 225:
                alert('buy 600 liters');
                break;
                case 600:
                alert('buy 300 liters');
                break;
                default:
                    alert('Fuel too expensive');
}