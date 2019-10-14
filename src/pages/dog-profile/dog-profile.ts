import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController  } from 'ionic-angular';
import {VaccinationsPage} from '../vaccinations/vaccinations';
import { DewormingsPage} from '../dewormings/dewormings';
import { FormAdoptPage } from '../form-adopt/form-adopt';
import { ApiProvider } from '../../providers/api/api';
import { EditPetPage } from '../edit-pet/edit-pet';
import { LostDogPage } from '../lost-dog/lost-dog';

@Component({
  selector: 'page-dog-profile',
  templateUrl: 'dog-profile.html',
})
export class DogProfilePage {


	dog:any = {};
	vaccinations:any = {};
	dewormings:any = {};
  owner;

  constructor(public navCtrl: NavController, public navParams: NavParams,public AP: ApiProvider,private alertCtrl: AlertController) {
  	this.dog = this.navParams.get("dog");
  	this.dog = this.dog[0];
    this.owner = this.navParams.get("owner");
    console.log(this.owner);

  	this.AP.getVaccinations(this.dog.id).subscribe(
       (data) => {this.vaccinations = data},
       (error) =>{console.log(error)}
       );	


  	this.AP.getDewormings(this.dog.id).subscribe(
  		(data) => {this.dewormings = data},
  		(error) => {console.log(error)}
  		);
  }

  advertencia(id) {
  let alert = this.alertCtrl.create({
    title: 'Confirmar',
    message: '¿Seguro que quieres eliminarlo? ya no podras recuperar la cuenta.',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelo el prro');
        }
      },
      {
        text: 'Eliminar',
        handler: () => {
          console.log('eliminado prro');
          this.AP.deleteDog(id).subscribe(
            (data)=>{
              if( data == "Se elimino satisfactoriamente" ){
                this.navCtrl.pop();
              }
            },
            (error)=>{console.log(error)}
            );

        }
      }
    ]
  });
  alert.present();
}

showeditar(dog){
  this.navCtrl.push(EditPetPage,{'dog':dog});
}

showlostdog(){
  this.navCtrl.push(LostDogPage);
}

showvaccinations(){
	this.navCtrl.push(VaccinationsPage,{'vaccinations': this.vaccinations});
}

showdeworming(){
	this.navCtrl.push(DewormingsPage,{'dewormings' : this.dewormings});
}
showformAdopt( ){
	this.navCtrl.push(FormAdoptPage);
}
}
