import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DogProfilePage } from './dog-profile';

@NgModule({
  declarations: [
    DogProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(DogProfilePage),
  ],
})
export class DogProfilePageModule {}
