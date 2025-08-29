//Gerekli modulleri cagir
const http = require("http");

// http modulunden gelen createServer fonksiyonunu calistir ve dondurdugu Server objesini bir degiskene ata

//createServer'in icine aldigi fonksiyon, sunucumuza istek atildiginda ne yapilacagina karar verir
// bu fonksiyon 2 parametre alir: request ve response ve bu parametreler kullanicinin attigi istege ve kullaniciya dondurulecek cevaba erisim saglamamiza yarar
http.createServer((request, response) => {
  console.log("Kullanici istekte bulundu.");
  return;
});
