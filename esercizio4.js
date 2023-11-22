window.addEventListener("load", () => {
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  const p = document.getElementById("errorMessage");
  const ul = document.getElementById("tasks");
  button.addEventListener("click", () => {
    //crea eventlistner su click button

    if (input.value === "") {
      //se l'input e' vuoto stampa messaggio
      p.innerHTML = "Perfavore, inserisci del testo.";
    } else {
      p.innerHTML = "";
      //stampa contenuto in un nuovo li
      const li = document.createElement("li");
      li.innerHTML = input.value;
      ul.appendChild(li);
      //svuota input opzionale
      input.value = "";
    }
  });
});
