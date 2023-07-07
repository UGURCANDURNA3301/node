//belirli karakterlerin index'ini bulma
/*var a;
a = "merhaba merhaba merebe";
console.log(a);
console.log(a[1]);
console.log(a.indexOf("e"));
*/ var b;
b = "merhaba dünya";
/*console.log(b);
console.log(b.lastIndexOf("m"));
*/
//kontrol
console.log(b.startsWith("merhaba ")); //string'in hangi kelime ile başladığını kontrol etmeye yarar true-false döner...
console.log(b.startsWith("haba", 3)); //string'in başlangıç yerini belirlemeye yarar...
console.log(b.endsWith("dünya")); //string'in hangi kelime bittiğini kontrol etmeye yarar...
//içerip içermeme kontrolü
console.log(b.includes("haba")); //string içerisinde aranan indexin varlığını kontrol etme true-false döndürür
console.log(b.includes("erha", "dün"));
//string'i parçalama
console.log(b.slice(1, 5)); //string içerisinde seçili yerlerin içerisinde kalan kısmı döndürür
var c = "!selam";
console.log(c.slice(1)); //ikinci bir parametre girilmez ise sadece yazılı parametreyi kaldırır
console.log(c.substring(1)); //ikinci yöntem
//büyük harf küçük harf çevirme
console.log(c.toUpperCase()); //küçük harflerle yazılı string'i büyük harflere çevirme
c = c.toUpperCase();
console.log(c);
console.log(c.toLowerCase()); //büyük harflerle yazılı string'i küçük harflere çevirme
c = c.toLowerCase();
console.log(c);
//string'in başındaki sonundaki boşlukları kaldırma
var d = "   test   ";
console.log(d.trim()); //string' deki boşlukları ortadan kaldırma
d = d.slice(2, 4);
console.log(d);

var e = "test";
e = `s${e.slice(1)}`; //bu method string' deki seçili parametreyi silip yerine eklenmesini istenilen değeri koyar
console.log(e);
