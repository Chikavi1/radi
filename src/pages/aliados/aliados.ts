import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ShowAlliesPage } from '../show-allies/show-allies';
@Component({
  selector: 'page-aliados',
  templateUrl: 'aliados.html',
})
export class AliadosPage {
  allies : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public AP:ApiProvider) {
  	this.AP.getAllies().subscribe(
  			(data)  => {this.allies = data},
  			(error) => {console.log(error)}
  				);
  	}
  
doRefresh(refresher) {
    setTimeout(() => {
       this.AP.getAllies().subscribe(
       (data) => {this.allies = data},
       (error) =>{console.log(error)}
       );
            refresher.complete();
    }, 2000);
  }
goDetails(data){
  this.navCtrl.push(ShowAlliesPage,{datos : data});
}
}
