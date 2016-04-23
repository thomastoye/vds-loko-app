export class ExterneRelaties {
    wieBetrokken:WieBetrokken;
    verhoudingJeugdraad:string;
    promoRichtZich:string;
    gebruikBepaaldeMediaAlgemenePromo:boolean;
    gebruikBepaaldeMediaContactVrijwilligers:boolean;
}

export class WieBetrokken {
    schepenJeugd:string;
    andereSchepenen:string;
    burgemeester:string;
    jeugdraad:string;
    ouders:string;
    jeugddienst:string;
    onderwijs:string;
    lokaalOverlegBko:string;
    buren:string
}

export class Promo {
    richtZichTot:string;
    hoeGebruiken:Array<string>;
}
