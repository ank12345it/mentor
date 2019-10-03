import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UloginComponent } from './user/ulogin/ulogin.component';
import { MloginComponent } from './mentor/mlogin/mlogin.component';
import { AloginComponent } from './alogin/alogin.component';
import { UsignupComponent } from './user/usignup/usignup.component';
import { AppComponent } from './app.component';
import { MsignupComponent } from './mentor/msignup/msignup.component';
import { JavamentorComponent } from './javamentor/javamentor.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { UserdashComponent } from './dash/userdash/userdash.component';
import { MentordashComponent } from './dash/mentordash/mentordash.component';



const routes: Routes = [
  {path:'dashm',component:MentordashComponent},
  {path:'dashb',component:UserdashComponent},
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'Userlog',component:UloginComponent},
  {path:'Mentorlog',component:MloginComponent},
  {path:'Adminlog',component:AloginComponent},
  {path:'Usignup',component:UsignupComponent},
  {path:'Msignup',component:MsignupComponent},
  {path:'Jmentor',component:JavamentorComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
