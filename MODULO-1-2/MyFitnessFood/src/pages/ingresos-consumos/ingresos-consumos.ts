import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'ingresos-consumos.html'
})
export class IngresosPage {
  selectedStateOfMind: any;
  selectedTypeOfFood: any;
  selectedDate: any;
  selectedHour: any;
  msgFile:string;
  
  constructor(private toastCtrl: ToastController) {
   
    var self = this;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        self.msgFile = xhttp.responseText;
      }
    }
    xhttp.open("GET", "./assets/docs/msg", true);
    xhttp.send();


  }

  presentToast() {

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
