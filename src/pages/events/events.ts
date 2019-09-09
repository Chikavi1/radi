import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SecondaryPage } from '../secondary/secondary';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {



	events : any[];
  eventsFinished : any[];

  tipos;
  constructor(public navCtrl: NavController, public navParams: NavParams,public AP: ApiProvider) {
  		this.tipos = "proximos";
      this.AP.getEvents().subscribe(
  			(data)  => {this.events = data,console.log(data)},
  			(error) => {console.log(error)}
  			);
      this.AP.getEventsFinished().subscribe(
        (data)  => {this.eventsFinished = data,console.log(data)},
        (error) => {console.log(error)}
        );
  }
  navOptions = {
	animation: 'md-transition',
	duration: 1500
};

goToSecondary(data){
	this.navCtrl.push(SecondaryPage,{datos : data},this.navOptions);
}

doRefresh(refresher) {
    setTimeout(() => {
       this.AP.getEvents().subscribe(
       (data) => {this.events = data},
       (error) =>{console.log(error)}
       );
            refresher.complete();
    }, 2000);
  }



}
