import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UloginComponent } from './user/ulogin/ulogin.component';
import { MloginComponent } from './mlogin/mlogin.component';
import { AloginComponent } from './alogin/alogin.component';
import { UsignupComponent } from './user/usignup/usignup.component';
import { AppComponent } from './app.component';
import { MsignupComponent } from './msignup/msignup.component';
import { JavamentorComponent } from './javamentor/javamentor.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
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
