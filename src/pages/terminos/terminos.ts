import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController,ViewController } from 'ionic-angular';

/**
 * Generated class for the TerminosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terminos',
  templateUrl: 'terminos.html',
})
export class TerminosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public  viewCtrl: ViewController, public modalCtrl:ModalController) {
  }

cerrar() {
  this.viewCtrl.dismiss();

 }

}
