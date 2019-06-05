import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiProvider } from '../../providers/api/api';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-complaints',
  templateUrl: 'complaints.html',
})
export class ComplaintsPage {
 	
 	myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public AP: ApiProvider,public formBuilder: FormBuilder,public myToastCtrl: ToastController) {
  	 this.myForm = this.createMyForm();
  }

  private createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

 saveData(){
    console.log(this.myForm.value);
    this.AP.denuncia(this.myForm.value).subscribe(
    	response  => console.log(response),
    	error => {
    		if(error.status == 200){
    	 		this.mostrar_mensaje("Listo,se revisara tu caso,gracias por ayudar.");
    	 	}else{
    	 		this.mostrar_mensaje("Hubo un error,intenta de nuevo.");
    	 	}
    	});
  	}
  mostrar_mensaje(mensaje : string ){
	
  let toast = this.myToastCtrl.create({
    message: mensaje,
    duration: 3000,
    position: 'top'
  });

  toast.present();  	

  }
}
