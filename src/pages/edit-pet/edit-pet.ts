import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-edit-pet',
  templateUrl: 'edit-pet.html',
})
export class EditPetPage {
dog;
imagenload;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.dog = this.navParams.get("dog");
  		this.imagenload = "https://fakeimg.pl/400x400/17202f/?text=foto";
  		console.log(this.dog);
  }

 

}
