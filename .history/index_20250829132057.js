//Gerekli modulleri cagir
const http = require("http");

// http modulunden gelen createServer fonksiyonunu calistir ve dondurdugu Server objesini bir degiskene ata

//createServer'in icine aldigi fonksiyon, sunucumuza istek atildiginda ne yapilacagina karar verir
// bu fonksiyon 2 parametre alir: request ve response ve bu parametreler kullanicinin attigi istege ve kullaniciya dondurulecek cevaba erisim saglamamiza yarar
const server = http.createServer((request, response) => {
  console.log("Kullanici istekte bulundu.");
  return;
});

//olusturulan server degiskenini ayaga kaldirmamiz gerek
server.listen(4000, "127.0.0.1", () => {
  console.log("Sunucu ayaga kalkti 4000 port.");
});
