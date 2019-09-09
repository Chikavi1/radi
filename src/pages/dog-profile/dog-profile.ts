import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {VaccinationsPage} from '../vaccinations/vaccinations';
import {DewormingsPage} from '../dewormings/dewormings';
import { FormAdoptPage } from '../form-adopt/form-adopt';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-dog-profile',
  templateUrl: 'dog-profile.html',
})
export class DogProfilePage {


	dog:any = {};
	vaccinations:any = {};
	dewormings:any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams,public AP: ApiProvider) {
  	this.dog = this.navParams.get("dog");
  	this.dog = this.dog[0];


  	this.AP.getVaccinations(this.dog.id).subscribe(
       (data) => {this.vaccinations = data},
       (error) =>{console.log(error)}
       );	


  	this.AP.getDewormings(this.dog.id).subscribe(
  		(data) => {this.dewormings = data},
  		(error) => {console.log(error)}
  		);
  }



scan(){

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
