import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    IonicStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
