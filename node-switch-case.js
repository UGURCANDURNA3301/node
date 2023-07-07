var input = 49;
var express = input % 7 == 0 ? 7 : input % 7;
var day;
switch (express) {
  case 1:
    day = "pazartesi";
    break;

  case 2:
    day = "salı";
    break;

  case 3:
    day = "çarşamba";
    break;
  case 4:
    day = "perşembe";
    break;

  case 5:
    day = "cuma";
    break;
  case 6:
    day = "cumartesi";
    break;
  case 7:
    day = "pazar";
    break;
  default:
    day = "geçerli sayı gir";
}
console.log(`${"bugün günlerden: "}`, day);
