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

    data = "";
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,
    public AP:ApiProvider,public ToastCtrl:ToastController) {

  }

scan(){

  this.barcodeScanner.scan().then(barcodeData => {
   if(barcodeData.text != ""){
     this.AP.searchQrCode(barcodeData.text).subscribe(
       (data) => {
         this.goToProfileDog(data);
       },
       (error) =>{  this.mostrar_mensaje(error.error.text)}
       );
   }
  }).catch(err => {
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