import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DogProfilePage } from '../dog-profile/dog-profile';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {

  }

scan(){
	this.barcodeScanner.scan().then(barcodeData => {
	 console.log('Barcode data', barcodeData);
	 if(barcodeData.text == "id87456231"){
	 	this.goToProfileDog();
	 }
	}).catch(err => {
	    console.log('Error', err);
	});
}

goToProfileDog(){
	this.navCtrl.push(DogProfilePage);
}
}
