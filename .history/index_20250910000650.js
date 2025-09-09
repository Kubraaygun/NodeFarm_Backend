//Gerekli modulleri cagir
const http = require("http");
const url = require("url");
const fs = require("fs");
//html duzenleme fonksiyonunu cagir
const replaceTemplate = require("./modules/replaceTemplate");
//sablonlari okuyalim ki yazi verisi olarak kullaniciya gonderebilelim

let overviewHTML = fs.readFileSync("./templates/overview.html", "utf-8");
let cardTemplate = fs.readFileSync("./templates/card.html", "utf-8");
let detailTemplate = fs.readFileSync("./templates/product.html", "utf-8");

//once veri tabanimizda ki json verisini cekicez
let jsonData = fs.readFileSync("./dev-data/data.json", "utf-8");
// okunan JSON stringini, gercek bir JavaScript formatina cevir ki kullanabileyim
const data = JSON.parse(jsonData);

// http modulunden gelen createServer fonksiyonunu calistir ve dondurdugu Server objesini bir degiskene ata

//createServer'in icine aldigi fonksiyon, sunucumuza istek atildiginda ne yapilacagina karar verir
// bu fonksiyon 2 parametre alir: request ve response ve bu parametreler kullanicinin attigi istege ve kullaniciya dondurulecek cevaba erisim saglamamiza yarar
const server = http.createServer((request, response) => {
  //obje parclama yontemi ile gelen linkin .pathname degerini aldik ve pathname olarak tuttuk
  const { pathname, query } = url.parse(request.url, true);
  console.log("\n\nAranan urunun idsi:", query, "\n\n");

  // //gelen istegin yoluna gore farkli cevap gondermeliyiz
  switch (pathname) {
    case "/product":
      //oncelikle veri dizisindeki kullanicinin istedigi elemani (query'de id'si var ) bulmamiz lazim.

      const item = data.find((item) => item.id == query.id);
    //eger query.id'deki aradigim elemani bulduysam bunu item degiskenine ata sonra da console yaz
    // console.log(item);
    //sonrasinda detay sayfasinin html'ini (product.html) al ve dogru verilerle replaceTemplate fonksiyonu ile doldur sonrasinda bu sayfayi kullaniciya gonder.

    case "/overview":
      //urunler dizisinde ki kart sayisi kadar kart htmli olustur
      let cards = data
        .map((item) => {
          return replaceTemplate(cardTemplate, item);
        })
        .join("");

      overviewHTML = overviewHTML.replace("{%PRODUCT_CARDS%}", cards);

      return response.end(overviewHTML);
    case "/":
      return response.end("<h1>Anasayfaya hosgeldiniz</h1>");
    default:
      return response.end("<h1>404 - Sayfa bulunamadi</h1>");
  }
  return response.end(`<h1>Sunucuya hosgeldiniz</h1>
    <button>MERHABA</button>`);
});

//olusturulan server degiskenini ayaga kaldirmamiz gerek
server.listen(4000, "127.0.0.1", () => {
  console.log("Sunucu ayaga kalkti 4000 port.");
});
