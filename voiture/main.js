
class Voiture{
  marque;
  modele;
  annee;
  cylindree;
  couleur;
 
  constructor( marque,modele,annee,cylindree,couleur){
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.cylindree = cylindree;
    this.couleur = couleur;
  }


}

function createVoiture(marque,modele,annee,cylindree,couleur) {
  return new Voiture(marque,modele,annee,cylindree,couleur);
}

function aficheProp(obj) {
  
  for(let prop in obj){
    console.log(obj[prop]);
  }
}

let voiture1 = createVoiture("marque1","modele1","annee1","cylindree1","couleur1");
let voiture2 = createVoiture("marque2","modele2","annee2","cylindree2","couleur2");
let voiture3 = createVoiture("marque3","modele3","annee3","cylindree3","couleur3");

// console.log(voiture1);
// console.log(voiture2);
// console.log(voiture3);

aficheProp(voiture2);
