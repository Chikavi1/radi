import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { TerminosPage } from '../terminos/terminos';
import { FinishFormAdoptPage } from '../finish-form-adopt/finish-form-adopt';

/**
 * Generated class for the FormAdoptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-adopt',
  templateUrl: 'form-adopt.html',
})
export class FormAdoptPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormAdoptPage');
  }
  
  alert(){
  	this.presentModal();
  }

   presentModal() {
    const modal = this.modalCtrl.create(TerminosPage);
    modal.present();
  }

  goToFinish(){
     const modal = this.modalCtrl.create(FinishFormAdoptPage);
    modal.present();
  }
}
