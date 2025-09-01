//Gerekli modulleri cagir
const http = require("http");
const url = require("url");

// http modulunden gelen createServer fonksiyonunu calistir ve dondurdugu Server objesini bir degiskene ata

//createServer'in icine aldigi fonksiyon, sunucumuza istek atildiginda ne yapilacagina karar verir
// bu fonksiyon 2 parametre alir: request ve response ve bu parametreler kullanicinin attigi istege ve kullaniciya dondurulecek cevaba erisim saglamamiza yarar
const server = http.createServer((request, response) => {
  //obje parclama yontemi ile gelen linkin .pathname degerini aldik ve pathname olarak tuttuk
  const { pathname } = url.parse(request.url, true);
  return response.end(`<h1>Sunucuya hosgeldiniz</h1>`);

  // //gelen istegin yoluna gore farkli cevap gondermeliyiz
  // switch (pathname) {
  //   case "/product":
  //     return response.end("Product sayfasina hosgeldiniz");
  //   case "/overview":
  //     return response.end("Overview sayfasina hosgeldiniz");
  //   case "/":
  //     return response.end("Anasayfaya hosgeldiniz");
  //   default:
  //     return response.end("404 - Sayfa bulunamadi");
  // }
});

//olusturulan server degiskenini ayaga kaldirmamiz gerek
server.listen(4000, "127.0.0.1", () => {
  console.log("Sunucu ayaga kalkti 4000 port.");
});
