// boss
export default class Boss{
    constructor(nom, pv, pa){
        this.nom =nom
        this.pv = pv
        this.pa = pa
    }
    enigme = () => {
        if ( this.pv == 100 && enigme1 == reponse){
            let enigme1 = prompt("je peux être d'eau, d'air ou d'électricité qui suis-je?")
            let reponse = "courant"
            return reponse
            console.log(`tu as réussi`);
        } 
            
        }
}

// let boss1 = new Boss("Sauron", 1000, 20 )
// let boss2 = new Boss("Chronos", 1000, 20)
// let boss3 = new Boss ("Lilith", 1050, 15)

