import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DogProfilePage } from '../dog-profile/dog-profile';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,
  	public AP:ApiProvider,public ToastCtrl:ToastController) {

  }

scan(){
	this.barcodeScanner.scan().then(barcodeData => {
	 console.log('Barcode data', barcodeData);
     this.AP.searchQrCode(barcodeData).subscribe(
       (data) => {
         console.log(data),
         this.goToProfileDog(data);

       },
       (error) =>{  this.mostrar_mensaje(error.error.text)}
       );
	}).catch(err => {
	    console.log('Error', err);
	});

	
}

mostrar_mensaje(mensaje){
	
  let toast = this.ToastCtrl.create({
    message: mensaje,
    duration: 3000,
    position: 'bottom'
  });

  toast.present();  	
}

goToProfileDog(dog : any){ 
	this.navCtrl.push(DogProfilePage,{dog : dog});
}
}
