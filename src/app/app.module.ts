import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DogProfilePage } from '../pages/dog-profile/dog-profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {VaccinationsPage} from '../pages/vaccinations/vaccinations';
import {DewormingsPage} from '../pages/dewormings/dewormings';
import { FormAdoptPage } from '../pages/form-adopt/form-adopt';

import { DonationsPage } from '../pages/donations/donations';
import { EventsPage } from '../pages/events/events';
import { InfoPage } from '../pages/info/info';
import { TerminosPage } from '../pages/terminos/terminos';
import { FinishFormAdoptPage } from '../pages/finish-form-adopt/finish-form-adopt';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DogProfilePage,
    VaccinationsPage,
    DewormingsPage,
    FormAdoptPage,
    DonationsPage,
EventsPage,
InfoPage,
TerminosPage,
FinishFormAdoptPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DogProfilePage,
    VaccinationsPage,
    DewormingsPage,
    FormAdoptPage,
    DonationsPage,
EventsPage,
InfoPage,
TerminosPage,
FinishFormAdoptPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
