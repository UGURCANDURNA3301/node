//NaN => Not a number (sayı değil)
var a = 5.8985;
console.log(isNaN(a)); //nitelik sayı ise false çevirir
var b = "text";
console.log(isNaN(b)); //nitelik string ise true çeviri
console.log(parseInt(a)); //tam sayıya çevirme
console.log(a.toFixed(2)); //virgülden sonra 0 ile 20 arasında istenilen basamakları verir verir basamkaları yuvarlar
