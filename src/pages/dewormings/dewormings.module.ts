import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DewormingsPage } from './dewormings';

@NgModule({
  declarations: [
    DewormingsPage,
  ],
  imports: [
    IonicPageModule.forChild(DewormingsPage),
  ],
})
export class DewormingsPageModule {}
