import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  private nombre:string;
  private apellido:string;
  private telefono:string;
  private email:string;
  private descripcion:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logInfo(){
    console.log(`${this.nombre} ${this.apellido} ${this.telefono} ${this.email} ${this.descripcion}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
