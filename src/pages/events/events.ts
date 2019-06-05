import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
	events : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public AP: ApiProvider) {
  		this.AP.getEvents().subscribe(
  			(data)  => {this.events = data,console.log(data)},
  			(error) => {console.log(error)}
  			);
  }





}
