// card html'ini ve urun bilgilerini parametre olarak alacak data.json'dan gelen verileri alip, degisken olarak tanimlanan yerelere koyacak ve geri dondurecek

const replaceTemplate = (html, data) => {
  //once bir cikti olusturuyoruz let ile cunku degisiklik yapicaz

  //htmlimin icindeki {%PRODUCTNAME%} degiskenini bul ve onu data.json'imdan gelen urun ismiyle, kiraz, avakado vs degistir
  let output = html.replace(/{%PRODUCTNAME%}/g, data.productName);

  //sonrasinda ayni islemi geri kalan butun ozellikler icin yap
  output = output.replace(/{%QUANTITY%}/g, data.quantity);
  output = output.replace(/{%PRICE%}/g, data.price);
  output = output.replace(/{%IMAGE%}/g, data.image);
  output = output.replace(/{%ID%}/g, data.id);
  output = output.replace(/{%NUTRIENTS%}/g, data.nutrients);
  output = output.replace(/{%DESCRIPTION%}/g, data.description);
  output = output.replace(/{%FROM%}/g, data.from);
};
