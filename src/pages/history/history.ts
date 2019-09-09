import { Component } from '@angular/core';
import {  NavController, NavParams,ToastController,AlertController,LoadingController  } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import { ApiProvider } from '../../providers/api/api';
import { DogProfilePage } from '../dog-profile/dog-profile';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
historialActivo = true;

historial:any = [];
guardado:any = [];
activo:boolean;
  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  private _historial:HistorialProvider,
  			  public AP:ApiProvider,
  			  public ToastCtrl:ToastController,
  			  public alertCtrl:AlertController,
  			  public loadingCtrl: LoadingController) {  	
  	this.activo;
  }

  ionViewDidLoad() {
  	

  	this.guardado = localStorage.getItem('datos');
  	this.guardado = JSON.parse(this.guardado);
  	this.historial = this.guardado; 

  	 if( this.historial === null ){
    	this.activo = false;
    }else{
    	this.activo = true;
    }
  }

  abrir_scan(codigo:string){
  	console.log(codigo);
  	this.AP.searchQrCode(codigo).subscribe(
       (data) => {
         this.goToProfileDog(data);
       },
       (error) =>{this.mostrar_mensaje(error.error.text)}
       );
   }
confirmacion() {
    const confirm = this.alertCtrl.create({
      title: '¿Estas seguro?',
      message: 'Al aceptar,se eliminara por completo el historial.',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Acepto',
          handler: () => {
          	this.eliminar();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

eliminar(){
	this._historial.eliminar_historial();
	this.refresh();
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
 

refresh(){
	this.guardado = localStorage.getItem('datos');
  	this.guardado = JSON.parse(this.guardado);
  	this.historial = this.guardado; 
  	this.activo = false;
}

doRefresh(refresher) {

    this.guardado = localStorage.getItem('datos');
  	this.guardado = JSON.parse(this.guardado);
  	this.historial = this.guardado; 
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 750);
  }


  }


