import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BiografiaTwoPage } from '../pages/biografia-two/biografia-two';
import { FotoTwoPage } from '../pages/foto-two/foto-two';
import { Canciones2fPage } from '../pages/canciones2f/canciones2f';
import { BiografiaKygoPage } from '../pages/biografia-kygo/biografia-kygo';
import { FotoKygoPage } from '../pages/foto-kygo/foto-kygo';
import { CancioneskygoPage } from '../pages/cancioneskygo/cancioneskygo';
import { BiografiaAlanPage } from '../pages/biografia-alan/biografia-alan';
import { FotoAlanPage } from '../pages/foto-alan/foto-alan';
import { CancionesAlanPage } from '../pages/canciones-alan/canciones-alan';
import { BiografiaChainsPage } from '../pages/biografia-chains/biografia-chains';
import { FotoChainsPage } from '../pages/foto-chains/foto-chains';
import { CancionesChainsPage } from '../pages/canciones-chains/canciones-chains';
import { Reseña2FPage } from '../pages/reseña2-f/reseña2-f';
import { ReseñaAwPage } from '../pages/reseña-aw/reseña-aw';
import { ReseñaChPage } from '../pages/reseña-ch/reseña-ch';
import { ReseñaKPage } from '../pages/reseña-k/reseña-k';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BiografiaTwoPage,
    FotoTwoPage,
    Canciones2fPage,
    BiografiaKygoPage,
    FotoKygoPage,
    CancioneskygoPage,
    BiografiaAlanPage,
    FotoAlanPage,
    CancionesAlanPage,
    BiografiaChainsPage,
    FotoChainsPage,
    CancionesChainsPage,
    Reseña2FPage,
    ReseñaAwPage,
    ReseñaChPage,
    ReseñaKPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BiografiaTwoPage,
    FotoTwoPage,
    Canciones2fPage,
    BiografiaKygoPage,
    FotoKygoPage,
    CancioneskygoPage,
    BiografiaAlanPage,
    FotoAlanPage,
    CancionesAlanPage,
    BiografiaChainsPage,
    FotoChainsPage,
    CancionesChainsPage,
    Reseña2FPage,
    ReseñaAwPage,
    ReseñaChPage,
    ReseñaKPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
