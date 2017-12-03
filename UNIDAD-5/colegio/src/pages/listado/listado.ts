import { ListadoDetailPage } from './../listado-detail/listado-detail';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { curso } from './curso';



/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class ListadoPage {

  private cursos: curso[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let curso1:curso = new curso('curso1','5to',23);
    let curso2:curso = new curso('curso2','2to',43);
    let curso3:curso = new curso('curso3','1to',13);    
    this.cursos = [curso1,curso2,curso3];

  }

  navegar(index:number){
    let curs = this.cursos[index];
    this.navCtrl.push(
      ListadoDetailPage,
      {
        curso : curs
      }
    )
  }  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

}
