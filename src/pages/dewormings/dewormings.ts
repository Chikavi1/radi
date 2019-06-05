import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dewormings',
  templateUrl: 'dewormings.html',
})
export class DewormingsPage {
	dewormings:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.dewormings = this.navParams.get("dewormings");
  }

}
