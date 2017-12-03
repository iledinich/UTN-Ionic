import { QuienessomosPage } from './../quienessomos/quienessomos';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  private email:string;
  private password:string;

  quienessomos = QuienessomosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  login(){
    if(this.email != 'a@a.com' || this.password != '123'){
      let alert = this.alertCtrl.create({
        title: 'Error de login',
        subTitle: 'Contraseña y/o email incorrecto',
        buttons: ['OK']
      });
      alert.present();
    }else{
      let alert = this.alertCtrl.create({
        title: 'Login exitoso',
        subTitle: 'Bievenido!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
