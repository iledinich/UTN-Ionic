import { InicioPage } from './../inicio/inicio';
import { ListadoPage } from './../listado/listado';
import { InfoPage } from './../info/info';
  
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the MisTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-mis-tabs',
  templateUrl: 'mis-tabs.html'
})
export class MisTabsPage {

  inicioRoot = InicioPage;
  listadoRoot = ListadoPage;
  infoRoot = InfoPage;


  constructor(public navCtrl: NavController) {}

}
