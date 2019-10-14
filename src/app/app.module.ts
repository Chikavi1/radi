import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DogProfilePage } from '../pages/dog-profile/dog-profile';
import {VaccinationsPage} from '../pages/vaccinations/vaccinations';
import {DewormingsPage} from '../pages/dewormings/dewormings';
import { FormAdoptPage } from '../pages/form-adopt/form-adopt';
import { ComplaintsPage } from '../pages/complaints/complaints';
import { DonationsPage } from '../pages/donations/donations';
import { EventsPage } from '../pages/events/events';
import { InfoPage } from '../pages/info/info';
import { SecondaryPage } from '../pages/secondary/secondary';
import { SecondaryPageInfoPage } from '../pages/secondary-page-info/secondary-page-info';
import { AliadosPage } from '../pages/aliados/aliados';
import { TerminosPage } from '../pages/terminos/terminos';
import { FinishFormAdoptPage } from '../pages/finish-form-adopt/finish-form-adopt';
import { ShowAlliesPage } from '../pages/show-allies/show-allies';
import { HistoryPage } from '../pages/history/history';
import { RegisterPage } from '../pages/register/register';
import { InstructionsPage } from '../pages/instructions/instructions';
import {ErrorPage} from '../pages/error/error';
import {AdoptPage} from '../pages/adopt/adopt';
import { SuccessStoriesPage } from '../pages/success-stories/success-stories';
import { FeedPage } from '../pages/feed/feed';
import {ProfilePage} from '../pages/profile/profile';
import {CreatePetPage} from '../pages/create-pet/create-pet';
import {ChangepasswordPage} from '../pages/changepassword/changepassword';
import { EditPetPage } from '../pages/edit-pet/edit-pet';
import {LostDogPage} from '../pages/lost-dog/lost-dog';


import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ApiProvider } from '../providers/api/api';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { HistorialProvider } from '../providers/historial/historial';

import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';

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
    ComplaintsPage,
    SecondaryPage,
    SecondaryPageInfoPage,
    AliadosPage,
    ShowAlliesPage,
    RegisterPage,
    HistoryPage,
    InstructionsPage,
    ErrorPage,
    AdoptPage,
    SuccessStoriesPage,
    FeedPage,
    CreatePetPage,
    ChangepasswordPage,
    ProfilePage,
    EditPetPage,
    LostDogPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
     IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot()

          
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
    ComplaintsPage,
    SecondaryPage,
    SecondaryPageInfoPage,
    AliadosPage,
    ShowAlliesPage,
    RegisterPage,
    HistoryPage,
    InstructionsPage,
    ErrorPage,
    AdoptPage,
    SuccessStoriesPage,
    FeedPage,
    CreatePetPage,
    ChangepasswordPage,
    ProfilePage,
    EditPetPage,
    LostDogPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
     {provide: LOCALE_ID, useValue:"es" },
    ApiProvider,
    AuthServiceProvider,
    HistorialProvider,
    Camera,
    ImagePicker
  ]
})
export class AppModule {}
