import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
	datos:any = [];
  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public  viewCtrl: ViewController,
public navParams: NavParams,private auth: AuthServiceProvider,) {
  	this.datos.id = localStorage.getItem("user");
  }

  ionViewDidLoad() {
  }

  check(){
  	if(this.datos.newpassword == this.datos.rnewpassword){
  		this.auth.changePassword(this.datos).then(
  			(data) => {
  				this.presentAlert("Aviso",data.json());
  				if(data.json() === "Se actualizo satisfactoriamente"){
  					this.closeModal();
  				}
  			}
  			);

  	}else{
  		this.presentAlert("Error","la confirmación de la contraseña no coincide con la nueva contraseña");
  	}
  }

  closeModal(){
     this.viewCtrl.dismiss();
   }


	presentAlert(title,message) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: message,
    cssClass: 'profalert',
    buttons: ['Cerrar']


  });
  alert.present();
}

}
