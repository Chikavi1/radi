import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DogProfilePage } from '../pages/dog-profile/dog-profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {VaccinationsPage} from '../pages/vaccinations/vaccinations';
import {DewormingsPage} from '../pages/dewormings/dewormings';
import { FormAdoptPage } from '../pages/form-adopt/form-adopt';
import { ComplaintsPage } from '../pages/complaints/complaints';
import { DonationsPage } from '../pages/donations/donations';
import { EventsPage } from '../pages/events/events';
import { InfoPage } from '../pages/info/info';



import { TerminosPage } from '../pages/terminos/terminos';
import { FinishFormAdoptPage } from '../pages/finish-form-adopt/finish-form-adopt';
import { HttpClientModule } from '@angular/common/http';


import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ApiProvider } from '../providers/api/api';
registerLocaleData(localeEs);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DogProfilePage,
    VaccinationsPage,
    DewormingsPage,
    FormAdoptPage,
    DonationsPage,
    EventsPage,
    InfoPage,
    TerminosPage,
    FinishFormAdoptPage,
    ComplaintsPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DogProfilePage,
    VaccinationsPage,
    DewormingsPage,
    FormAdoptPage,
    DonationsPage,
    EventsPage,
    InfoPage,
    TerminosPage,
    FinishFormAdoptPage,
    ComplaintsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
     {provide: LOCALE_ID, useValue:"es" },
    ApiProvider
  ]
})
export class AppModule {}
