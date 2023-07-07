var i = 0;
while (i < 5) {
  i++;
  console.log(i);
}

//for ve while kullanarak ödngü yapma...
var number = 1;
var sayı_bulma = [];
for (var i = 0; i < 5; i++) {
  while (number % 7 != 0 || number % 9 != 0) {
    number++;
  }
  sayı_bulma.push(number);
  number++;
}
console.log(sayı_bulma);
