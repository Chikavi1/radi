import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { TerminosPage } from '../terminos/terminos';
import { FinishFormAdoptPage } from '../finish-form-adopt/finish-form-adopt';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-form-adopt',
  templateUrl: 'form-adopt.html',
})
export class FormAdoptPage {
 myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,public formBuilder: FormBuilder, public Api: ApiProvider) {
     this.myForm = this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      vivienda: ['', Validators.required],
      dormir: ['', Validators.required],
      adopcion: ['', Validators.required],
      de_acuerdo: ['', Validators.required],
      medidas: ['', Validators.required],
    });
  }


  saveData(){

    console.log(this.myForm.value);
    this.Api.solicitud(this.myForm.value).subscribe(response  => console.log(response));
    this.goToFinish();
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
