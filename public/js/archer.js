// archer
export default class Archer{
    constructor(nom, pv, pa, fleche){
        this.nom = nom
        this.pv = pv
        this.pa = pa
        this.fleche = fleche
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