// mage
export default class Mage{
    constructor(nom, pv, pa, pm){
        this.nom =nom
        this.pv = pv
        this.pa = pa
        this.pm = pm
    }
    defense = () => {
        this.pa = this.pa * 0.5
        this.pv = this.pv * 2.5 
    }
    attaque = () => {
        this.pa = this.pa * 1.4
        this.pv = this.pv * 0.75  
        
    }
    
}
// let mage1 = new Mage ('Morrigane', 350, 45, 3)
// console.log(mage1);