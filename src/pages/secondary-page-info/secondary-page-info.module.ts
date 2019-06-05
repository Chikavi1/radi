import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondaryPageInfoPage } from './secondary-page-info';

@NgModule({
  declarations: [
    SecondaryPageInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondaryPageInfoPage),
  ],
})
export class SecondaryPageInfoPageModule {}
