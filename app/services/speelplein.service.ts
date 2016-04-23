import {SpeelpleinEnquete} from "../models/speelpleinenquete/SpeelpleinEnquete";
import {Injectable} from 'angular2/core';
import {getJson} from "./resources/speelpleinenquete.resource";

export interface SpeelpleinService {
    getAll(): Promise<Array<SpeelpleinEnquete>>;
}

@Injectable()
export class MockSpeelpleinService implements SpeelpleinService{
    getAll(): Promise<Array<SpeelpleinEnquete>> {
        var json = JSON.parse(getJson());
        return Promise.resolve(<Array<SpeelpleinEnquete>> json);
    }
}
