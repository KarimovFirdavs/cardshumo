let cardname = prompt('karta kiriting')
let cardcode=card.slice(0, 4) + "********"+ cardname.slice(12, 15)
function cardNumber() {

   if(cardname.length==16 && !isNaN(+cardname)){
    if(cardname.startsWith('8600')){
        console.log(cardcode)
        console.log(' Uzcard');
    }else if(cardname.startsWith('9680')){
        console.log(' Humo');
        console.log(cardcode)
    }else if(cardname.startsWith('8778')){
        console.log(' Visa');
        console.log(cardcode)
    }else{
        console.log('Eror');
    }

} 
// cardNumber(cardname)
