import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import {VaccinationsPage} from '../vaccinations/vaccinations';
import {DewormingsPage} from '../dewormings/dewormings';

@Component({
  selector: 'page-dog-profile',
  templateUrl: 'dog-profile.html',
})
export class DogProfilePage {

	nombre = "radi";
	especie = "perro";
	color = "cafe";
	raza = "Criollo";
	senas = "Es un perro medio grande,tiene una patita mala y normalemente ladra mucho.";
	notes = "Puede parecer que es un perro violento por que ladra pero su comportamiento es bueno,es muy jugador y suele dormir mucho."
	adoptado = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
scan(){

}
showvaccinations(){
	this.navCtrl.push(VaccinationsPage);
}

showdeworming(){
	this.navCtrl.push(DewormingsPage);
}
}
