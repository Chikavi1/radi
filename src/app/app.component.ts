import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {HistoryPage} from '../pages/history/history';

import { ComplaintsPage } from '../pages/complaints/complaints';
import { EventsPage } from '../pages/events/events';
import { InfoPage } from '../pages/info/info';
import { AliadosPage } from '../pages/aliados/aliados';
import { AdoptPage } from '../pages/adopt/adopt';
import { SuccessStoriesPage } from '../pages/success-stories/success-stories';
import { FeedPage } from '../pages/feed/feed';
import { CreatePetPage } from '../pages/create-pet/create-pet';
//import { DonationsPage } from '../pages/donations/donations';
import { timer } from 'rxjs/observable/timer';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  showSplash = true; // <-- show animation
  
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
     // { title: '¡Alimenta a un perro!',component: FeedPage  },
      { title: 'Historial',component: HistoryPage },
      { title: 'Adoptar',component: AdoptPage },
      { title: 'Eventos' , component: EventsPage },
      { title: 'Casos de Exito',component: SuccessStoriesPage  },
      { title: 'Hacer una denuncia', component: ComplaintsPage },
      //{ title: 'Donaciones', component: DonationsPage },
      { title: 'Aliados', component: AliadosPage },
      { title: 'Información', component: InfoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();

      this.statusBar.backgroundColorByHexString("#17202F");
      this.splashScreen.hide();

      timer(1000).subscribe(() => this.showSplash = false) 
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
