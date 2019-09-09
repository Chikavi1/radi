import { Injectable } from '@angular/core';
import { Platform,ToastController } from 'ionic-angular';
/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialProvider {
	
objeto:any[] = [];
 nose;
 misdatos:any[] = [];

  constructor(private platform: Platform,public ToastCtrl:ToastController) {
    console.log('Hello HistorialProvider Provider');
  }

  agregar_historial(codigoPR:string){

  	let DB = (localStorage.getItem("datos"))? JSON.parse(localStorage.getItem("datos")):[];
  	for(let item of DB){
  		if( item == codigoPR){
  			this.mostrar_mensaje("El perro ya estaba agregado a tu historial.");
  			return;
  		}
  	}
  	DB.push(codigoPR);
  	localStorage.setItem("datos",JSON.stringify(DB));

  	this.mostrar_mensaje("Se agrego el perro a tu historial.");
  }

  eliminar_historial(){
  	this.objeto = [];
  	localStorage.clear();
  }
  cargar_historial(){
    return this.objeto;
  }
 
  mostrar_mensaje(mensaje){
  
  let toast = this.ToastCtrl.create({
    message: mensaje,
    duration: 3000,
    position: 'bottom'
  });

  toast.present();    
}


  read_storage(){
  	if(this.platform.is('cordova')){
  	}else{
  		if(localStorage.getItem("datos")){
  			JSON.parse(localStorage.getItem("datos"));
  		}
  	}
  }

  save_storage(){
  	if(this.platform.is('cordova')){

  	}else{
  		localStorage.setItem("datos",JSON.stringify(this.objeto));
  	}
  }
}
