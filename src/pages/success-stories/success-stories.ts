import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


/**
 * Generated class for the SuccessStoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-success-stories',
  templateUrl: 'success-stories.html',
})
export class SuccessStoriesPage {
	dogs;
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider) {
  	 this.api.getCases().subscribe(
           (data) => { this.dogs = data;},
           (error) =>{ });
  }


}
