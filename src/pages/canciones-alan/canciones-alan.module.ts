import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionesAlanPage } from './canciones-alan';

@NgModule({
  declarations: [
    CancionesAlanPage,
  ],
  imports: [
    IonicPageModule.forChild(CancionesAlanPage),
  ],
})
export class CancionesAlanPageModule {}
