import { Component } from '@angular/core';
import { NavController,ToastController, ModalController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { DogProfilePage } from '../dog-profile/dog-profile';
import { InstructionsPage } from '../instructions/instructions';
import { ApiProvider } from '../../providers/api/api';
import { HistorialProvider } from '../../providers/historial/historial';
import {ErrorPage} from '../error/error';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    options :BarcodeScannerOptions;
  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              public AP:ApiProvider,
              public ToastCtrl:ToastController,
              private _historial:HistorialProvider,
              private modal: ModalController) {

  }

scan(){


  this.options = {
        prompt : "Coloque un código QR en el interior del rectángulo del visor para escanear.",
        resultDisplayDuration : 0
    }

      this.barcodeScanner.scan(this.options).then(barcodeData => {
      if (barcodeData.cancelled == true) {
       this.navCtrl.push(ErrorPage);
        }

       if(barcodeData.text != ""){
         if(barcodeData.text.startsWith("RD")){
          this._historial.agregar_historial(barcodeData.text);
        }
         this.AP.searchQrCode(barcodeData.text).subscribe(
           (data) => {
             this.goToProfileDog(data);
           },
           (error) =>{
           }
           );
       }
      }).catch(err => {
      });

  
}

presentProfileModal() {
   let profileModal = this.modal.create(InstructionsPage);
   profileModal.present();
 }

instructions(){
  this.presentProfileModal();
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