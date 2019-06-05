import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondaryPageInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
