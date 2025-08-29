//Gerekli modulleri cagir
const http = require("http");
const url = require("url");

// http modulunden gelen createServer fonksiyonunu calistir ve dondurdugu Server objesini bir degiskene ata

//createServer'in icine aldigi fonksiyon, sunucumuza istek atildiginda ne yapilacagina karar verir
// bu fonksiyon 2 parametre alir: request ve response ve bu parametreler kullanicinin attigi istege ve kullaniciya dondurulecek cevaba erisim saglamamiza yarar
const server = http.createServer((request, response) => {
  console.log(url.parse(request.url, true)); // kullanicinin hangi endpoint'e istek attigini gormek icin
  return response.end("Sunucu calisiyor, hosgeldiniz :)");
});

//olusturulan server degiskenini ayaga kaldirmamiz gerek
server.listen(4000, "127.0.0.1", () => {
  console.log("Sunucu ayaga kalkti 4000 port.");
});
