export class PraktischeInfo {
    regio:string;
    invuller:Invuller;
    contactPersoon:ContactPersoon;
    maatschappelijkeZetel:MaatschappelijkeZetel;
    werkingOpgerichtJaar:string;
    aantalWerkingen:AantalWerkingen;
    organisator:Organisator;
    opmerkingen:string;
}

export class Invuller {
    naam:string;
    functie:string
}

export class ContactPersoon {
    naam:string
}

export class MaatschappelijkeZetelAdres {
    straat:string;
    nummer:string;
    postcode:string;
    plaats:string
}

export class MaatschappelijkeZetel {
    adres:MaatschappelijkeZetelAdres;
    telefoon:string;
    gsm:string;
    email:string;
    website:string
}

export class AantalWerkingen {
    totaal:number;
    centraleWerkingen:number;
    wijkWerkingen:number;
    mobieleWerkingen:number
}

export class Organisator {
    naam:string;
    soort:string;
    gemeentelijkeWerkingVertrektVanuit:string;
    particulierWerkingVertrektVanuit:string;
    rechtsVorm:string
}
