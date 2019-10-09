import { Component } from '@angular/core';
import { NavController, NavParams,ModalController, ViewController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { CreatePetPage } from '../create-pet/create-pet';
import { RegisterPage } from '../register/register';
import { ApiProvider } from '../../providers/api/api';
import { DogProfilePage } from '../dog-profile/dog-profile';
import { ChangepasswordPage } from '../changepassword/changepassword';



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

   ionViewWillEnter(){
      this.api.getDogs(localStorage.getItem("user")).subscribe(
           (data) => {
             this.perros = data;
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
 openchangepassword(){
    let passwordPage = this.modalCtrl.create(ChangepasswordPage);
   passwordPage.present();
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
  this.navCtrl.push(DogProfilePage,{dog : dog,owner: true});
}
 
  doRefresh(refresher) {
     this.api.getDogs(localStorage.getItem("user")).subscribe(
           (data) => {
             this.perros = data;
           },
           (error) => {

           });
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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
         console.log(data);
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
    this.auth.logout(localStorage.getItem("user")).subscribe(
      (data) => {
        if(data.status == 200){
        window.localStorage.removeItem("user");
        window.localStorage.removeItem('token');
        this.closeModal();
        }
      },(error) => {

      });
   
  }

}
