
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private usuario: string;
  private password: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public storage: Storage) {
  }

  registrarse(){
    this.navCtrl.setRoot(
      RegistroPage
    )
  }

  login() {
    //Veo si el usuario con el que intenta ingresar existe
    this.storage.get(this.usuario).then(
      (val)=>{
        if(val){
          if(val.password == this.password){
            this.navCtrl.setRoot(
              HomePage
            )
          }else{
            this.msgPoPUp("Error","Usuario o contraseña incorrecto.")
          }
        }else{
          this.msgPoPUp("Error","Usuario o contraseña incorrecto.")
        }
      }
    )
  }

  msgPoPUp(title: string, msg: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
