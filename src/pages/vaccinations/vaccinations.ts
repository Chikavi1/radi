import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-vaccinations',
  templateUrl: 'vaccinations.html',
})
export class VaccinationsPage {
  vaccinations:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vaccinations = this.navParams.get("vaccinations");
  }


}
