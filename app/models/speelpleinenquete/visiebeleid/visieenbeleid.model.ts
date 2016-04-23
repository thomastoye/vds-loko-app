import {StellingOordeel} from "../InvulWaarden";

export class VisieEnBeleid {
    belangVoorOnsSpeepleinGerangschikt:Array<string>;
    stellingen:Array<StellingOordeel>;
    inclusie:Inclusie;
    visie:Visie;
    trotseVerwezenlijkingUrl:string;
    opmerkingen:string;
}

export class Inclusie {
    werktInclusief:Boolean;
    waardoorInclusief:string;
    waardoorNietInclusief:string;
}

export class Visie {
    heeftVisieTekst:string;
    visieTekstUrl:string;
}
