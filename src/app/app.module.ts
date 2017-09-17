import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {WeatherService} from './weather.service';
import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';


const appRoutes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'setting' , component:SettingComponent
  },
  {
    path:'home',component:HomeComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
