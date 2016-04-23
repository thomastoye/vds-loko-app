export class OrganisatorischeOnderbouw {
    ondersteuningGemeente:OndersteuningGemeente;
    inkomsten:Inkomsten;
    budget:Budget;
    verzekeringAfgeslotenDoor:string;
    gebruikUitpas:string;
    besparingen:Besparingen;
    opmerkingen:string
}

export class OndersteuningGemeente {
    volledigeOrganisatie:boolean;
    logistiekeSteun:boolean;
    terreinenTerBeschikking:boolean;
    personeelTerBeschikking:boolean;
    richtGebouwenEnTerreinenIn:boolean;
    subsidies:boolean;
    geenOndersteuning:boolean;
    andere:string
}

export class Inkomsten {
    financieleOndersteuningGemeente2015:string;
    deelnemersBijdragen:string;
    andereInkomsten:Array<string>
}

export class Budget {
    totaalWerkingsBudget:number;
    werkingsBudgetten:WerkingsBudgetten;
    percentVrijwilligersVergoedingen:number;
    percentSpeelmateriaal:number;
    totaleInkomsten:number;
    totaleUitgaven:number
}

export class WerkingsBudgetten {
    speelmateriaal:number;
    terrein:number;
    animatorenVergoeding:number;
    anderVrijwilligersBeleid:number;
    verzekering:number;
    catering:number;
    andere:number
}

export class Besparingen {
    voorbijeTweeMaandenMoetenBesparen:boolean;
    bespaardOp:Array<string>
}

