import {Page, NavController, NavParams} from 'ionic-angular';
import {OnInit} from "angular2/core";
import {SpeelpleinEnquete} from "../../models/speelpleinenquete/SpeelpleinEnquete";


@Page({
    templateUrl: 'build/pages/speelplein-details/speelplein-details.html'
})
export class SpeelpleinDetailsPage {
    speelplein: SpeelpleinEnquete;

    constructor(private nav:NavController, navParams:NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.speelplein = <SpeelpleinEnquete> navParams.get('speelplein');
    }
}
