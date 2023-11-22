//funzione che prende due numeri, base ed esponente
const power = (base, exponent) => {
  try {
    //converto eventuali stringhe contenenti numeri trasformandoli in numeri
    base = Number(base);
    exponent = Number(exponent);
    //controllo se i parametri inseriti sono dei numeri
    //altrimenti lancio un errore
    if (isNaN(base) && isNaN(exponent)) {
      throw new Error("non hai inserito dei numeri validi");
    } else if (isNaN(base)) {
      throw new Error("base non è un numero");
    } else if (isNaN(exponent)) {
      throw new Error("exponent non è un numero");
    }
    //se non ci sono errori
    return Math.pow(base, exponent);
  } catch (error) {
    console.error(error.message);
    //non vedo l'errore in console.error,
    //forse per le impostazioni del mio browser
    //quindi ho stampato l'errore in console.log
    console.log(error.message);
    return null;
  } finally {
    console.log("operazione completata");
  }
};
