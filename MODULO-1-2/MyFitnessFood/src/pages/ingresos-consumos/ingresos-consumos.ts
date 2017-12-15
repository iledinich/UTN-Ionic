import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { FoodReg } from './food-reg';
import { Storage } from "@ionic/storage";


@Component({
  selector: 'page-list',
  templateUrl: 'ingresos-consumos.html'
})
export class IngresosPage {

  registro: FoodReg;
  selectedDate: any;
  selectedHour: any;
  food: any;
  selectedStateOfMind: any;
  selectedTypeOfFood: any;


  msgFile: string;

  constructor(private toastCtrl: ToastController, private storage: Storage) {

    var self = this;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        self.msgFile = xhttp.responseText;
      }
    }
    xhttp.open("GET", "./assets/docs/msg", true);
    xhttp.send();
  }

  presentToast() {

    //Guardo todo en un objeto
    this.registro = new FoodReg(this.selectedDate, this.selectedHour, this.food, this.selectedStateOfMind, this.selectedTypeOfFood);
    this.storage.ready().then(()=>{
      this.storage.set(this.selectedDate,this.registro);
      console.log(this.registro);
    });

    let toast = this.toastCtrl.create({
      message: this.msgFile,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
