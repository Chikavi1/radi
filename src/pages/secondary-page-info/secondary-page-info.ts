import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-secondary-page-info',
  templateUrl: 'secondary-page-info.html',
})
export class SecondaryPageInfoPage {
	datos = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.datos =this.navParams.get("datos");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondaryPageInfoPage');
  }

}
