//her kelimenin ilk 3 harfi kesilecek büyük yazılıp birbirlerine`-` ile bağlanacak...

var a = "ekmek";
var b = "pasta";
var c = "börek";

a = a.slice(0, 3) + "-";
b = b.slice(0, 3) + "-";
c = c.slice(0, 3);
console.log(a.toUpperCase() + b.toUpperCase() + c.toUpperCase());

// var num= sayı şeklinde değişken tanımla if-else yapısı ile sayının çift veya tek olduğunu bul

var num = "5";
if (num % 2 == 1) {
  console.log("sayı tek");
} else if (num % 2 == 0) {
  console.log("sayı çift");
} else {
  console.log(typeof "geçerli sayı giriniz");
}

// case break ile ayları belirleme
var input = 13;
var express = input % 12 == 0 ? 12 : input % 12;
var day;
switch (express) {
  case 1:
    day = "ocak";
    break;

  case 2:
    day = "şubat";
    break;

  case 3:
    day = "mart";
    break;
  case 4:
    day = "nisan";
    break;

  case 5:
    day = "mayıs";
    break;
  case 6:
    day = "haziran";
    break;
  case 7:
    day = "temmuz";
    break;
  case 8:
    day = "ağustos";
    break;
  case 9:
    day = "eylül";
    break;
  case 10:
    day = "ekim";
    break;
  case 11:
    day = "kasım";
    break;
  case 12:
    day = "aralık";
    break;
  default:
    day = "geçerli sayı gir";
}
console.log(`${"bugün aylardan: "}`, day);
