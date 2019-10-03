import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { Mpass } from './mpass';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-msignup',
  templateUrl: './msignup.component.html',
  styleUrls: ['./msignup.component.css']
})
export class MsignupComponent implements OnInit {
 first;second;
  constructor(private http:HttpClient) { }
  check(){
    //console.log(first,second);
     if(this.first!=this.second)
     {
         return false;
     }
     else{
       return true;
     }
 }
  ngOnInit() {
  }
 mregister(form){
   console.log(form.value.email,form.value.contact,form.value.pass,form.value.c_pass,form.value.tech,form.value.exp,form.value.sttime,form.value.entime );
  const data=new Mpass(form.value.email,form.value.contact,form.value.pass,form.value.c_pass,form.value.tech,form.value.exp,form.value.sttime,form.value.entime); 
  const c = data;
    
  const req=this.http.post('http://localhost:8091/api/mentor',c).toPromise()
  .then((data:any)=>{
    console.log(data);
  })
}
}
