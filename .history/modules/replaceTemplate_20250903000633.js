// card html'ini ve urun bilgilerini parametre olarak alacak data.json'dan gelen verileri alip, degisken olarak tanimlanan yerelere koyacak ve geri dondurecek

const replaceTemplate = (html, data) => {
  //once bir cikti olusturuyoruz let ile cunku degisiklik yapicaz

  //htmlimin icindeki {%PRODUCTNAME%} degiskenini bul ve onu data.json'imdan gelen urun ismiyle, kiraz, avakado vs degistir
  let output = html.replace(/{%PRODUCTNAME%}/g, data.productName);
};
