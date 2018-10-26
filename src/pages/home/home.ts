import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BiografiaTwoPage } from '../biografia-two/biografia-two';
import { FotoTwoPage } from '../foto-two/foto-two';
import { Canciones2fPage } from '../canciones2f/canciones2f';
import { BiografiaKygoPage } from '../biografia-kygo/biografia-kygo';
import { FotoKygoPage } from '../foto-kygo/foto-kygo';
import { CancioneskygoPage } from '../cancioneskygo/cancioneskygo';
import { BiografiaAlanPage } from '../biografia-alan/biografia-alan';
import { FotoAlanPage } from '../foto-alan/foto-alan';
import { CancionesAlanPage } from '../canciones-alan/canciones-alan';
import { BiografiaChainsPage } from '../biografia-chains/biografia-chains';
import { FotoChainsPage } from '../foto-chains/foto-chains';
import { CancionesChainsPage } from '../canciones-chains/canciones-chains';
import { Reseña2FPage } from '../reseña2-f/reseña2-f';
import { ReseñaKPage } from '../reseña-k/reseña-k';
import { ReseñaChPage } from '../reseña-ch/reseña-ch';
import { ReseñaAwPage } from '../reseña-aw/reseña-aw';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  biografiatwo = BiografiaTwoPage;
  fototwo = FotoTwoPage;
  album = Canciones2fPage;
  biografiak = BiografiaKygoPage;
  fotokygo = FotoKygoPage;
  album2 = CancioneskygoPage;
  biografiaa = BiografiaAlanPage;
  fotoalan = FotoAlanPage;
  album3 = CancionesAlanPage;
  bioch= BiografiaChainsPage;
  fotochains= FotoChainsPage;
  collage= CancionesChainsPage;
  Res2f= Reseña2FPage;
  ResK= ReseñaKPage;
  Resch= ReseñaChPage;
  ResA= ReseñaAwPage;


  constructor(public navCtrl: NavController) {

  }
  clickbiografiatwo()
  {
    this.navCtrl.push(this.biografiatwo);
  }

  clickfototwo()
  {
    this.navCtrl.push(this.fototwo);
  }

  clickfirst()
  {
    this.navCtrl.push(this.album);
  }

  clickbiografiak()
  {
    this.navCtrl.push(this.biografiak);
  }

  clickfotokygo()
  {
    this.navCtrl.push(this.fotokygo);
  }

  clickcloud()
  {
    this.navCtrl.push(this.album2);
  }

  clickbiografiaalan()
  {
    this.navCtrl.push(this.biografiaa);
  }

  clickfotoalan()
  {
    this.navCtrl.push(this.fotoalan);
  }

  clickfaded()
  {
    this.navCtrl.push(this.album3);
  }

  clickbiografiachains()
  {
    this.navCtrl.push(this.bioch);
  }

  clickfotochains()
  {
    this.navCtrl.push(this.fotochains);
  }

  clickcollage()
  {
    this.navCtrl.push(this.collage);
  }

  clickresena2f()
  {
    this.navCtrl.push(this.Res2f);
  }

  clickresenak()
  {
    this.navCtrl.push(this.ResK);
  }

  clickresenach()
  {
    this.navCtrl.push(this.Resch);
  }

  clickresenaaw()
  {
    this.navCtrl.push(this.ResA);
  }





}
