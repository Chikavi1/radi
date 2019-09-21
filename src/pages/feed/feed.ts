import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  estadoComida = "No validado";
  estadoPerro = "No validado";
  todobien = "No validado";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  comprueba_comida(){
  	this.estadoComida = "validado";
  	if(this.estadoComida == "validado" && this.estadoPerro == "validado"){
  		this.todobien = "validado";
  		console.log("comida",this.todobien);
  	}
  }

  comprueba_perro(){
  	this.estadoPerro = "validado"
  		if(this.estadoComida === "validado" && this.estadoPerro === "validado"){
  		this.todobien = "validado";
  	}
  		console.log("perro",this.todobien);
  }

}
