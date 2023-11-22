const book = {
  title: "Il Grande Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

//aggiungi proprieta rating
book.rating = 0;
//aggiungi metodo increaseRating che aumenta fino  a 10
book.increaserating = (number) => {
  book.rating += number;
  if (book.rating > 10) {
    book.rating = 10;
  }
};
//rimuovi proprieta year
delete book.year;
//stampa in console tutte le proprieta dell'oggetto in formato "[chiave]:[valore]"
const keys = Object.keys(book);
const values = Object.values(book);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = values[i];
  console.log(`[${key}]:[${value}]`);
}
