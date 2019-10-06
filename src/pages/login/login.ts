import { Component } from '@angular/core';
import {  NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RegisterPage } from '../register/register';
import {ProfilePage} from '../profile/profile';
import { ViewController } from 'ionic-angular';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	email:any;
	password:any;

	token:any;
	 constructor(
    private nav: NavController,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    public viewCtrl: ViewController
  ) {}

	logout(){
		window.localStorage.removeItem('token');
	}

  closeModal(){
    this.nav.pop();
      }

	login(){
		this.auth.loginlaravel(this.email,this.password).subscribe(
       (data) => {
       	this.token = data._body;
       	this.presentAlert("Bienvenido","se logeo correctamente");
       	localStorage.setItem("token",JSON.stringify(this.token));
       	this.nav.push(ProfilePage);
       },
       (error) =>{
       	this.presentAlert("Error","Las credenciales no son correctas")}
       );	
	}

 createAccount(){
   this.nav.push(RegisterPage);
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