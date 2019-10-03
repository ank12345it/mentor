import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UloginComponent } from './user/ulogin/ulogin.component';
import { MloginComponent } from './mentor/mlogin/mlogin.component';
import { AloginComponent } from './alogin/alogin.component';
import { UsignupComponent } from './user/usignup/usignup.component';
import { MsignupComponent } from './mentor/msignup/msignup.component';
import { JavamentorComponent } from './javamentor/javamentor.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserdashComponent } from './dash/userdash/userdash.component';
import { MentordashComponent } from './dash/mentordash/mentordash.component';


@NgModule({
  declarations: [
    AppComponent,
    UloginComponent,
    MloginComponent,
    AloginComponent,
    UsignupComponent,
    MsignupComponent,
    JavamentorComponent,
    SearchComponent,
    HomeComponent,
    UserdashComponent,
    MentordashComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
