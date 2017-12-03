import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoDetailPage } from './listado-detail';

@NgModule({
  declarations: [
    ListadoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoDetailPage),
  ],
})
export class ListadoDetailPageModule {}
