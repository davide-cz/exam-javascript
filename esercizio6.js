//scrivi quanto oggetti ci sono
//ci sono 4 oggetti :1-devTeam/ 2-lead / 3-tester[0] / 4-tester[1]
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
//ho creato una copia di projectname con nome mobileApp
//l'ho inserita nell'oggetto  e ho eliminato l'originale
//
//
//Costruisci una funzione che crea e restituisce un oggetto tester a partire dal
//parametro name (stringa). Durante la creazione dell’oggetto, la funzione
//dovrebbe anche assegnare un array skills con tre stringhe casuali tra
//"JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django",
//"PostgreSQL"
const newTester = (stringa) => {
  const tester = {
    nome: `${stringa}`,
    skills: [],
  };
  const arrayDiSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Django",
    "PostgreSQL",
  ];

  //inizializzo un ciclo for per assegnare 3 skills casuali
  for (let i = 0; i < 3; i++) {
    let j = Math.ceil(Math.random() * (7 - i));
    //faccio un random di skills e rimuovo da arrayDiSkills
    //le skills già pushate
    tester.skills.push(arrayDiSkills[j]);
    arrayDiSkills.splice(j, 1);
  }
  return tester;
};

//Usa questa funzione per aggiungere un nuovo tester a devTeamCopy
devTeamCopy.testers.push(newTester("Veronica"));

//scrivi quanti oggetti sono stati creati in memoria oltre a quelli
//iniziali, e giustifica la tua risposta
//
//oltre a quelli iniziali sono stati creati altri 5 oggetti,
//4 di copia dell'oggetto iniziale.
//1 tester aggiunto all'oggetto copiato
