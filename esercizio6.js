//scrivi quanto oggetti ci sono
const devTeam = {
  lead: {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"],
  },
  testers: [
    { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] },
  ],
  projectName: "WebApp",
};
//Crea una variabile chiamata teamLead che faccia
//riferimento alla proprietà lead dell'oggetto devTeam .
const teamLead = devTeam.lead;
//Aggiungi "GraphQL" alle skills di teamLead .
teamLead.skills.push("GraphQL");
//Crea una copia dell'oggetto devTeam e memorizzala in

//una nuova variabile chiamata devTeamCopy
const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
//cambia la proprietà projectName di devTeam2 in "MobileApp"
//const { projectName: mobileApp } = devTeamCopy;
devTeamCopy.mobileApp = devTeamCopy.projectName;
delete devTeamCopy.projectName;
console.log(devTeamCopy);

//Costruisci una funzione che crea e restituisce un oggetto tester a partire dal
//parametro name (stringa). Durante la creazione dell’oggetto, la funzione
//dovrebbe anche assegnare un array skills con tre stringhe casuali tra
//"JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django",
//"PostgreSQL"
const newTester = (stringa) => {};
