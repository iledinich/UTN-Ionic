import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { Usuario } from './usuario';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  private nombre:string;
  private apellido:string;
  private password1:string;
  private email:string;
  private password2:string;
  private newUser:Usuario;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private storage: Storage) {

  }

  

  logForm(form) {
    if(this.nombre == undefined || this.apellido == undefined || this.email == undefined || this.password1 == undefined || this.password2 == undefined )
    {
      let alert = this.alertCtrl.create({
        title: 'Error campos',
        subTitle: 'Por favor complete todos los campos',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    if(this.password1 != this.password2){
      let alert = this.alertCtrl.create({
        title: 'Error de contraseña',
        subTitle: 'Las contraseñas no coinciden',
        buttons: ['OK']
      });
      alert.present();
    }else{
        this.storage.ready().then(()=>{
          //Persisto los datos en el storage
          this.newUser = new Usuario(this.nombre,this.apellido,this.password1,this.email);

          this.storage.set(this.email,this.newUser);
            this.storage.get(this.email).then(
              (val) => {
                 let alert = this.alertCtrl.create({
                  title: 'Exito!',
                  subTitle: 'Te has registrado con exito!',
                  buttons: ['OK']
                });
                alert.present();
                }
            )
        });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
