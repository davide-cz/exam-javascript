//funzioone che accette array di stringhe
const concatenaStringhe = (arrayDiStringhe) => {
  let stringaConcatenata = "";
  //filtra stringhe che iniziano con a || A
  const arrayfilt = arrayDiStringhe.filter(
    (stringa) => stringa.startsWith(`a`) || stringa.startsWith(`A`)
  );
  //concatena stringhe
  arrayfilt.forEach((element) => {
    stringaConcatenata += element;
  });
  //tronca stringa con + 10 caratteri
  if (stringaConcatenata.length > 10) {
    stringaConcatenata = stringaConcatenata.substring(0, 10);
  }
  return stringaConcatenata;
};
/* 
const array = ["as", "ak", "ad", "er", "asaasdadsda"];
const funzione = concatenaStringhe(array);
console.log(funzione); */
