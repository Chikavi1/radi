import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-finish-form-adopt',
  templateUrl: 'finish-form-adopt.html',
})
export class FinishFormAdoptPage {
 nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams,public  viewCtrl: ViewController) {

  }

cerrar() {
  this.viewCtrl.dismiss();

 }
}

