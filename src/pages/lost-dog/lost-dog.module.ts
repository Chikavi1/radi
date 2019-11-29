import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostDogPage } from './lost-dog';

@NgModule({
  declarations: [
    LostDogPage,
  ],
  imports: [
    IonicPageModule.forChild(LostDogPage),
  ],
})
export class LostDogPageModule {}
