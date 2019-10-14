import { Component } from '@angular/core';
import {  NavController, NavParams,ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-create-pet',
  templateUrl: 'create-pet.html',
})
export class CreatePetPage {
datos:any = [];

 imagenbase: string = "";

  constructor(public navCtrl: NavController,
  	 public  viewCtrl: ViewController,
  	  public navParams: NavParams,
  	  private camera: Camera,
  	  public api:ApiProvider) {
  		this.imagenbase = "https://fakeimg.pl/400x400/17202f/?text=foto";
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
		 this.imagenbase = 'data:image/jpeg;base64,' + imageData;
		 this.datos.imagenPreview = this.imagenbase;
		}, (err) => {
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
			this.imagenbase = 'data:image/jpeg;base64,' + imageData;
			this.datos.imagenPreview = this.imagenbase;
		},(err) => {
		 // Handle error
		 console.log("Error en camera", JSON.stringify(err));
		});
  	}



   crear(){
   	this.api.createDogProfile(this.datos).then((data) => console.log(data));
    this.closeModal();
   }




}
