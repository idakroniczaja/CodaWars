
function getIssuer(number) {
    let string =  number.toString();
  if(string.length===15 && (string.startsWith(34)||string.startsWith(37))){
    return "AMEX"
  }else if (string.length === 16 && string.startsWith(6011)){
    return 'Discover'
  }else if (string.length===16 && (string.startsWith(51)||string.startsWith(52) || string.startsWith(53) || string.startsWith(54) || string.startsWith(55))){
    return "Mastercard"
  }else if((string.length === 13 || string.length === 16) && string.startsWith(4)){
    return "VISA"
  }else return "Unknown"
 }