let firsName=prompt("Lütfen isminizi girin !" ,"");

const myName = document.querySelector('#myName');
myName.innerHTML=firsName

let now = new Date();
let clock = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

