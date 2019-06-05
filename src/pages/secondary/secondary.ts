import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secondary',
  templateUrl: 'secondary.html',
})
export class SecondaryPage {

datos = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.datos = this.navParams.get("datos");
  	console.log(this.datos);	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondaryPage');
  }

}
