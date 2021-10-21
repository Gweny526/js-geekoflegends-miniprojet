// boss
import Boss from './boss.js'
import Archer from './archer.js'
import Guerrier from './guerrier.js'
import Mage from './mage.js'

// boss
let boss1 = new Boss("Sauron", 500, 50)
let boss2 = new Boss("Chronos", 500, 50)
let boss3 = new Boss ("Lilith", 500, 55)

console.log(boss1);
console.log(boss2);
console.log(boss3);

// archer
let archer1 = new Archer ('Nyssa', 350, 10, 7);
console.log(archer1);
// archer1.attaque()
// console.log(archer1.pa);
// console.log(archer1.pv);

// guerrier
let guerrier1 = new Guerrier ('Xena', 400, 35, 0)
console.log(guerrier1);

// mage
let mage1 = new Mage ('Moriganne', 350, 45, 9);
console.log(mage1);

// script
// le boss

console.log(`${boss3.nom} est entrée dans l'arène`);

// les héros
// let chooseHero = [archer1, guerrier1, mage1]
// chooseHero.Math.floor();
// console.log(chooseHero.Math.random());
console.log(`${archer1.nom} est la première de l'équipe a rejoindre le combat`);
console.log(`${guerrier1.nom} rejoint l'archer`);
console.log(`${mage1.nom} est la dernière a rejoindre l'équipe face à ${boss3.nom}`);

// premier tour
// l'archer attaque
archer1.attaque()
console.log(`${archer1.nom} attaque ${boss3.nom} et lui inflige ${archer1.pa} point de dégat mais l'archer se blesse en attaquant il lui reste ${archer1.pv} de pv`);

// fin de tour de l'archer
console.log(`${archer1.nom} perd 2 fleche il lui en reste donc plus que  ${archer1.fleche - 2} `);

// la boss subit l'attaque de l'archer
console.log(`il reste ${boss3.pv - archer1.pa} de pv à Lilith`);

guerrier1.attaque()
console.log(`${guerrier1.nom} attaque ${boss3.nom} et lui inflige ${guerrier1.pa} point de dégat mais la guerière se blesse en attaquant il lui reste donc plus que ${guerrier1.pv} de pv`);

// fin de tour pour la guerrière
console.log(`${guerrier1.nom}, maintenant que son tour est fini gagne ${guerrier1.pr + 1} point de rage`);

// la boss subit l'attaque de la guerrière
console.log(`${boss3.nom} encaisse le coup sans bronchée mais il lui reste plus que ${boss3.pv - guerrier1.pa} de pv `);

// la mage attaque 
mage1.attaque()
console.log(`${mage1.nom} attaque ${boss3.nom} et lui inflige ${mage1.pa} point de dégat mais la guerière se blesse en attaquant il lui reste donc plus que ${mage1.pv} de pv`);

// la fin de tour de la mage
console.log(`le tour de ${mage1.nom} est terminé et perd 2 point de mana et lui reste donc ${mage1.pm - 2} de point de mana `);

// la boss subit l'attaque de la mage
console.log(`${boss3.nom} encaisse le coup avec un légé sourire il lui reste plus que ${boss3.pv - mage1.pa} de pv` );

// le boss attaque

console.log(`c'est au tour de ${boss3.nom} d'attaquer, elle décide d'attaquer ${guerrier1.nom} et lui inflige ${boss3.pa} de point de dégat`);

// la guerrière subit des dégat 
console.log(`${guerrier1.nom} encaisse le coup, il lui reste plus que ${guerrier1.pv - boss3.pa} de pv` );