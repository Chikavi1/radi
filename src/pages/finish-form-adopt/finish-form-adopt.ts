import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormAdoptPage } from '../form-adopt/form-adopt';
import { ModalController,ViewController } from 'ionic-angular';


/**
 * Generated class for the FinishFormAdoptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finish-form-adopt',
  templateUrl: 'finish-form-adopt.html',
})
export class FinishFormAdoptPage {
 nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams,public  viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishFormAdoptPage');
  }
cerrar() {
  this.viewCtrl.dismiss();

 }
}

