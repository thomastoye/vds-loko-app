import {PraktischeInfo} from "./praktischeinfo/praktischeinfo.model";
import {VisieEnBeleid} from "./visiebeleid/visieenbeleid.model";
import {OrganisatorischeOnderbouw} from "./organisatorischeonderbouw/organisatorischeonderbouw.model";
import {ExterneRelaties} from "./externerelaties/externerelaties.model";

export class SpeelpleinEnquete {
    praktischeInfo: PraktischeInfo;
    visieEnBeleid: VisieEnBeleid;
    speelpleinPloeg: SpeelpleinEnquete;
    organisatorischeOnderbouw: OrganisatorischeOnderbouw;
    externeRelaties: ExterneRelaties;
}
