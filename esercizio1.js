//chiedi all'utente il suo nome e memorizza
const userName = prompt("qual è il tuo nome?");

//chiedi all'utente il suo ANNO DI NASCITA e memorizza
const userBirthYear = Number(prompt("qual è il tuo anno di nascita?"));

if (
  (userBirthYear % 4 === 0 && userBirthYear % 100 !== 0) ||
  userBirthYear % 400 === 0
) {
  alert(`ciao ${userName} sei nato in un anno bisestile`);
} else {
  alert(`ciao ${userName} non sei nato in un anno bisestile`);
}
