let customer = prompt('What is your name?');
alert(`Welcome to The Place ${customer}`);
alert('Here is our menu 1. Rice: #100 \t2. Beans: #200 \n3. Shawarma #3500 \t4. Garri #1500. \n Use the number to make your selection');
let rice = 100;
let beans = 200;
let shawarma = 3500;
let garri = 1500;
let customerOrder = parseInt(prompt('What would you like to order?'));
let orderQuant = parseInt(prompt('How many will you like to order'));
switch (customerOrder){
    case 1:
        if (orderQuant >= 3 && orderQuant <= 5){
            let customerDiscount = rice * 0.1;
            alert(`Total is NGN${rice * orderQuant - customerDiscount} with 10% discount`);
        }
        else if(orderQuant > 5 && orderQuant <= 10){
            let customerDiscount = rice * 0.15;
            alert(`Total is NGN${rice * orderQuant - customerDiscount} with 15%`);
        }
        else if(orderQuant > 10){
            let customerDiscount = rice * 0.2;
            alert(`Total is NGN${rice * orderQuant - customerDiscount} with 20% discount`);
        }
        else{
            alert(`No discount offered. Total is ${rice * orderQuant}`);
        }
        break;


        case 2:
            if(orderQuant >= 3 && orderQuant <= 5){
                let customerDiscount = beans * 0.1;
                alert(`Total is NGN${beans * orderQuant - customerDiscount} with 10% discount`);
            }
            else if(orderQuant > 5 && orderQuant <= 10){
                let customerDiscount = beans * 0.15;
                alert(`Total is NGN${beans * orderQuant - customerDiscount} with 15% discount`);
            }
            else if(orderQuant > 10){
                let customerDiscount = beans * 0.2;
                alert(`Total is NGN${beans * orderQuant - customerDiscount} with 20% discount`);
            }
            else{
                alert(`No discount offered. Total is ${beans * orderQuant}`);
            }

            break;

            case 3:
            if(orderQuant >= 3 && orderQuant <= 5){
                let customerDiscount = shawarma * 0.1;
                alert(`Total is NGN${shawarma * orderQuant - customerDiscount} with 10% discount`);
            }
            else if(orderQuant > 5 && orderQuant <= 10){
                let customerDiscount = shawarma * 0.15;
                alert(`Total is NGN${shawarma * orderQuant - customerDiscount} with 15% discount`);
            }
            else if(orderQuant > 10){
                let customerDiscount = shawarma * 0.2;
                alert(`Total is NGN${shawarma * orderQuant - customerDiscount} with 20% discount`);
            }
            else{
                alert(`No discount offered. Total is ${shawarma * orderQuant}`);
            }

            break;
        default:
            alert('Food not available yet.');
            break;
}