import { ListadoPage } from './../listado/listado';
import { QuienessomosPage } from './../quienessomos/quienessomos';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";


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
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public storage:Storage) {
  }

  login(){

    //Verifico que el usuario exista en el localstorage
    this.storage.forEach(
      (value,key)=>{
        if(key==this.email){
          //Verifico la password
          this.storage.get(key).then(
            (val)=>{
              if(val.password == this.password){
                this.msgPoPUp("Loguin exitoso","Bienvenido");
                //Lo redirigo al curso
                this.navCtrl.push(
                  ListadoPage
                )
              }else{
                this.msgPoPUp("Contraseña incorrecta","Intente con otra contraseña");
              }
            }
          )
        }else{
          this.msgPoPUp("No existe el usuario","Intente con otro usuario");
        }
      }
    )
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  msgPoPUp(title:string, msg:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
