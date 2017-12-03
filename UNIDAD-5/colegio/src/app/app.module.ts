import { ListadoPage } from './../pages/listado/listado';
import { InicioPage } from './../pages/inicio/inicio';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { QuienessomosPage } from './../pages/quienessomos/quienessomos';

import { MyApp } from './app.component';
import { InfoPage } from '../pages/info/info';
import { MisTabsPage } from '../pages/mis-tabs/mis-tabs';
import { FormsModule } from '@angular/forms'
import { RegistroPage } from '../pages/registro/registro';


@NgModule({
  declarations: [
    MyApp,
    MisTabsPage,
    InfoPage,
    InicioPage,
    ListadoPage,
    QuienessomosPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MisTabsPage,
    InfoPage,
    InicioPage,
    ListadoPage,
    RegistroPage,
    QuienessomosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
