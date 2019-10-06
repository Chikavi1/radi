import { Component } from '@angular/core';
import { NavController, NavParams,ModalController, ViewController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { CreatePetPage } from '../create-pet/create-pet';
import { RegisterPage } from '../register/register';
import { ApiProvider } from '../../providers/api/api';
import { DogProfilePage } from '../dog-profile/dog-profile';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
datos:any = [];
usuario:any = [];
email:any;
password:any;

perros:any = [];
isactive;


  constructor(public navCtrl: NavController,
  			  public navParams: NavParams ,
  			  private auth: AuthServiceProvider,
          public  viewCtrl: ViewController,
  			  public modalCtrl: ModalController,
          private alertCtrl: AlertController,
          public api:ApiProvider
          ) {

    this.isactive = this.check_is_active();
  	this.auth.getUser(localStorage.getItem("user")).subscribe(
  		(data)  => {
  			this.datos = JSON.parse(data._body);

        this.api.getDogs(localStorage.getItem("user")).subscribe(
           (data) => {
             this.perros = data;
           },
           (error) => {

           });
  		},
  		(error) => {
      });
   }

   alerta(title,message) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: message,
    cssClass: 'profalert',
    buttons: ['Cerrar']


  });
  alert.present();
}

   check_is_active(){
     if(localStorage.getItem('token')){
       return true;
     }else{
       return false;
     }
   }

   closeModal(){
     this.viewCtrl.dismiss();
   }

 goToCreatePet(){
   let createpet = this.modalCtrl.create(CreatePetPage);
   createpet.present();
 }


abrir_perfil(codigo:string){
    this.api.searchQrCode(codigo).subscribe(
       (data) => {
         this.goToProfileDog(data);
         console.log(data)
       },
       (error) =>{console.log("Valio verfa")}
       );
   }

goToProfileDog(dog : any){ 
  this.navCtrl.push(DogProfilePage,{dog : dog});
}
 

 //Auth logica

 createAccount(){
   this.closeModal();
   this.navCtrl.push(RegisterPage);
 }

 login()
 {
         this.auth.loginlaravel(this.email,this.password).subscribe(
       (data) => {
         this.usuario = data.json();
         localStorage.setItem("user",this.usuario.user.id);
         localStorage.setItem("token",this.usuario.access_token);
         this.closeModal();
         let profileModal = this.modalCtrl.create(ProfilePage);
         profileModal.present();
       },
       (error) =>{
        this.alerta("Error","Las credenciales no son correctas")
       }
       );  
  }

  logout(){
    window.localStorage.removeItem("user");
    window.localStorage.removeItem('token');
    this.closeModal();
  }

}
