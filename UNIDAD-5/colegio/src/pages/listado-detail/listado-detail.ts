import { curso } from './../listado/curso';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alumno } from './alumno';

/**
 * Generated class for the ListadoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado-detail',
  templateUrl: 'listado-detail.html',
})
export class ListadoDetailPage {

  alumnos:Alumno[];
  titleCurse:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let curso:curso = this.navParams.get('curso');
    this.alumnos = [
      new Alumno("ivan",8,8,8),
      new Alumno("pepe",5,5,5),
      new Alumno("pepa",10,10,10)
    ]
    this.titleCurse= curso.nombre;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoDetailPage');
  }

}
