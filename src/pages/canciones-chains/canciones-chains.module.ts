import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionesChainsPage } from './canciones-chains';

@NgModule({
  declarations: [
    CancionesChainsPage,
  ],
  imports: [
    IonicPageModule.forChild(CancionesChainsPage),
  ],
})
export class CancionesChainsPageModule {}
