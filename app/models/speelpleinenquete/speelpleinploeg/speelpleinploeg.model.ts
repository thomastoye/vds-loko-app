import {BegeleidersStatuut} from "../InvulWaarden";

export class StatuutBegeleleiders {
    animator:BegeleidersStatuut;
    hoofdanimator:BegeleidersStatuut;
    verantwoordelijke:BegeleidersStatuut;
    medewerkerOnderhoudKuisen:BegeleidersStatuut;
    medewerkerKokenKuisen:BegeleidersStatuut;
    medewerkerAdministratie:BegeleidersStatuut;
    medewerkerBusvervoer:BegeleidersStatuut;
    medewerkerAndereTaken:BegeleidersStatuut
}

export class Aantallen {
    begeleidersMedewerkers:AantalBegeleidersMedewerkers;
    animatorenTotaal:number;
    aantalVolgensGeslacht:AantalVolgensGeslacht;
    aantalVolgensAttest:AantalVolgensAttest;
    aantalVolgensLeeftijd:AantalVolgensLeeftijd;
    aantalVolgensErvaring:AantalVolgensErvaring
}

export class AantalBegeleidersMedewerkers {
    begeleiderAnimator:number;
    begeleiderHoofdAnimator:number;
    speelpleinVerantwoordelijke:number;
    medewerkerOnderhoudKuisen:number;
    medewerkerKokenKuisen:number;
    medewerkerAdministratie:number;
    medewerkerBusVervoer:number;
    medewerkerAndereTaken:number;
}
export class AantalVolgensAttest {
    animator:number;
    hoofdanimator:number;
    stage:number;
    geenAttest:number;
}
export class AantalVolgensGeslacht {
    jongens:number;
    meisjes:number;
}
export class AantalVolgensLeeftijd {
    jongerDanZeventien:number;
    zeventienOfAchttien:number;
    ouderDanAchttien:number;
}
export class AantalVolgensErvaring {
    eersteJaar:number;
    tweedeJaar:number;
    drieTotVijfJaar:number;
    meerDanVijfJaar:number;
}

export class Vergoedingen {
    soortVergoeding:string;
    vrijwilligersVergoedingenBeleid:VrijwilligersVergoedingenBeleid;

    animatorMinimumForfaitaireVergoeding:number;
    animatorMaximumForfaitaireVergoeding:number;
    hoofdAnimatorMinimumForfaitaireVergoeding:number;
    hoofdAnimatorMaximumForfaitaireVergoeding:number;
    verantwoordelijkeMinimumForfaitaireVergoeding:number;
    verantwoordelijkeMaximumForfaitaireVergoeding:number;
}

export class VrijwilligersVergoedingenBeleid {
    hogereVergoedingMetAttest:boolean;
    hogereVergoedingMetErvaring:boolean;
    iedereenGelijkeVergoeding:boolean;
    hogereVergoedingMetAndereTakenpakket:boolean;
    hogereVergoedingTijdensHetJaarInzet:boolean;
}

export class AnimatorenWerving {
    kanalenGerangschikt:Array<string>;
    voorbeeldUrl:string;
}

export class AnimatorenLangerHouden {
    inspraakmogelijkheden:boolean;
    meerGeld:boolean;
    nieuweUitdagingen:boolean;
    inzettenOpWaardering:boolean;
    nietsSpeciaals:boolean;
    andere:string;
}

export class BegeleidersPloegProblemen {
    geen:boolean;
    teVeelBegeleiders:boolean;
    teWeinigBegeleiders:boolean;
    teWeinigGebrevetteerd:boolean;
    teWeinigErvaren:boolean;
    teJongeBegeleiders:boolean;
    teWeinigVerantwoordelijke:boolean;
    andere:string;
}

export class Jaarwerking {
    bestaat:boolean;
    waaromGeen:string;
    bestaatUit:Array<string>;
}

export class Stuurgroep {
    bestaat:boolean;
    functie:string;
    themas:Array<string>;
}
