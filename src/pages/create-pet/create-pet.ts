import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

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

 imagenPreview: string = "";
 imagen64:string;

  constructor(public navCtrl: NavController,
  	public formBuilder: FormBuilder,
  	 public  viewCtrl: ViewController,
  	  public navParams: NavParams,
  	  private camera: Camera,
  	  private imagePicker: ImagePicker) {
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

  open_gallery(){
  	const options: CameraOptions = {
		  quality: 100,
		  destinationType: this.camera.DestinationType.DATA_URL,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE,
		  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
		  correctOrientation: true,
		  targetWidth: 720
		}
		this.camera.getPicture(options).then((imageData) => {
			this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
		},(err) => {
		 // Handle error
		 console.log("Error en camera", JSON.stringify(err));
		});
  	}

  seleccionar_foto(){

	    let opciones:ImagePickerOptions = {
	      quality: 70,
	      outputType: 1,
	      maximumImagesCount: 1
	    }


    this.imagePicker.getPictures(opciones).then((results) => {

      for (var i = 0; i < results.length; i++) {
          // console.log('Image URI: ' + results[i]);
          this.imagenPreview = 'data:image/jpeg;base64,' + results[i];
          this.imagen64 = results[i];
      }

    }, (err) => {

      console.log( "ERROR en selector", JSON.stringify(err) );

    });

    }





}
