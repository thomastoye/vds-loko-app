export interface MateVanAkkoord {
    value: String
}

export class HelemaalAkkoord implements MateVanAkkoord { value = "Helemaal akkoord" }
export class Akkoord implements MateVanAkkoord { value = "Akkoord" }
export class Neutraal implements MateVanAkkoord { value = "Neutraal" }
export class NietAkkoord implements MateVanAkkoord { value = "Niet akkoord" }
export class HelemaalNietAkkoord implements MateVanAkkoord { value = "Helemaal niet akkoord" }
export class NietIngevuld implements MateVanAkkoord { value = "Niet ingevuld" }

export function applyMateVanAkkoord(value: string): MateVanAkkoord {
    if(value == "Helemaal akkoord") {
        return new HelemaalAkkoord()
    } else if(value == "Akkoord") {
        return new Akkoord()
    } else if(value == "Neutraal") {
        return new Neutraal()
    } else if(value == "Niet akkoord") {
        return new NietAkkoord()
    } else if(value == "Helemaal niet akkoord") {
        return new HelemaalNietAkkoord()
    } else if(value == "Niet ingevuld") {
        return new NietIngevuld()
    }
}

export interface BegeleidersStatuut {
    value: String
}

export class Tewerkgesteld implements  BegeleidersStatuut { value = "Tewerkgesteld" }
export class Vrijwillig implements BegeleidersStatuut { value = "Vrijwillig" }
export class IsErNiet implements BegeleidersStatuut { value = "Is er niet" }

export function applyBegeleidersStatuut(value: string): BegeleidersStatuut {
    if(value == "Tewerkgesteld") {
        return new Tewerkgesteld()
    } else if(value == "Vrijwillig") {
        return new Vrijwillig()
    } else if(value == "Is er niet") {
        return new IsErNiet()
    }
}

export class StellingOordeel {
    stelling: String;
    mateVanAkkoord: MateVanAkkoord;
}
