// guerrier
export default class Guerrier{
    constructor(nom, pv, pa, pr){
        this.nom = nom
        this.pv = pv
        this.pa = pa
        // pr = point de rage
        this.pr = pr
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
