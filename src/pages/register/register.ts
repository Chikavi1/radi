import { Component } from '@angular/core';
import { IonicPage,  AlertController,ModalController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  createSuccess = false;
  registerCredentials = { name: '', email: '', password: '', confirmation_password: '' };
  name:any;
  email:any;
  password:any;
  confirmation_password:any;
  constructor(
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    public  viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {


  }

  register(){
   

  this.auth.create_user(this.name,this.email,this.password,this.confirmation_password)
           .subscribe(
             (data)=>{
              this.auth.loginlaravel(this.email,this.password).subscribe((data)=>{
                  let usuario = data.json();
                  localStorage.setItem("user",usuario.user.id);
                  localStorage.setItem("token",usuario.access_token);
                   this.viewCtrl.dismiss();
                   let profileModal = this.modalCtrl.create(ProfilePage);
                   profileModal.present();
              });
            });
  }
closeModal(){
     this.viewCtrl.dismiss();
   }
 

}