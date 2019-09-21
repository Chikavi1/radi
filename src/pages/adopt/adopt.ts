import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { FormAdoptPage } from '../form-adopt/form-adopt';
import { DogProfilePage } from '../dog-profile/dog-profile';


@Component({
  selector: 'page-adopt',
  templateUrl: 'adopt.html',
})
export class AdoptPage {
  dogs;

  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider) {
    this.api.getStatus("no adoptado").subscribe(
           (data) => { this.dogs = data;},
           (error) =>{ });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdoptPage');
  }

  doRefresh(refresher) {
 
    setTimeout(() => {
      refresher.complete();
    }, 750);
  }
perfil_perro(codigo){
  console.log(codigo);
      this.api.searchQrCode(codigo).subscribe(
       (data) => {
         this.goToProfileDog(data);
       },
       (error) =>{}
       );
   }
  iraformulario(id){
    console.log(id);
    this.navCtrl.push(FormAdoptPage,{idperro : id});
  }
  goToProfileDog(dog : any){ 
  this.navCtrl.push(DogProfilePage,{dog : dog});
}
  
  }





