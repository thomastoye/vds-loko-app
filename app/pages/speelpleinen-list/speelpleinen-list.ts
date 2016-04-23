import {Page, NavController, NavParams} from 'ionic-angular';
import {SpeelpleinService, MockSpeelpleinService} from '../../services/speelplein.service'
import {OnInit} from "angular2/core";
import {SpeelpleinEnquete} from "../../models/speelpleinenquete/SpeelpleinEnquete";
import {SpeelpleinDetailsPage} from "../speelplein-details/speelplein-details";


@Page({
    templateUrl: 'build/pages/speelpleinen-list/speelpleinen-list.html',
    providers: [MockSpeelpleinService]
})
export class SpeelpleinenListPage implements OnInit {
    speelpleinen:Array<SpeelpleinEnquete> = [];
    speelpleinenDisplayed:Array<SpeelpleinEnquete> = [];
    filter:any = {query: ""};

    constructor(private nav:NavController, navParams:NavParams, private speelpleinService:MockSpeelpleinService) {
    }

    ngOnInit() {
        this.updateItems();
    }

    itemTapped(event, speelplein) {
        this.nav.push(SpeelpleinDetailsPage, {
            speelplein: speelplein
        });
    }

    updateItems() {
        this.speelpleinService
            .getAll()
            .then(res => {
                this.speelpleinen = res;
                this.updateSearch();
            })
    }

    updateSearch() {
        this.speelpleinenDisplayed = this.speelpleinen.filter(speelplein =>
            speelplein.praktischeInfo.organisator.naam.toLowerCase().indexOf(this.filter.query.toString().toLowerCase()) != -1
        );
    }
}
