//funzione che prende due numeri, base ed esponente
const power = (base, exponent) => {
  try {
    base = Number(base);
    exponent = Number(exponent);
    if (typeof base !== "number") {
      throw new Error("base non è in numero")
    }if (typeof exponent !== "number") {
        throw new Error("exponent non è un numero")}
    }else if (typeof exponent !== "number"&& typeof base !== "number" ){

    }
  } catch (error) {

  }
};
const result = Math.pow(base, exponent);

const number = power(2, 3);
console.log(number);


console.error("base non è in numero");
console.error("base non è in numero");