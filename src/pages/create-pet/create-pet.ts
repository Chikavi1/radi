import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the CreatePetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-pet',
  templateUrl: 'create-pet.html',
})
export class CreatePetPage {
 title;
 description;
 toppings;
 myForm: FormGroup;
 imagenPreview: string;


  constructor(public navCtrl: NavController,
  	public formBuilder: FormBuilder,
  	 public  viewCtrl: ViewController,
  	  public navParams: NavParams,
  	  private camera: Camera) {
  }

 closeModal(){
     this.viewCtrl.dismiss();
   }


mostrar_camara(){
	const options: CameraOptions = {
	  quality: 70,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  correctOrientation: true,
	  targetWidth: 720,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
	}

	this.camera.getPicture(options).then((imageData) => {
	 // imageData is either a base64 encoded string or a file URI
	 // If it's base64 (DATA_URL):
	 this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
	}, (err) => {
	 // Handle error
	 console.log("Error en camera", JSON.stringify(err));
	});

}


}
