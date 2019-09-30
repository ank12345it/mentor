import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Upass } from './Upass';
import { CommonService } from 'src/app/common.service';
import { ReturnStatement } from '@angular/compiler';


@Component({
  selector: 'app-usignup',
  templateUrl: './usignup.component.html',
  styleUrls: ['./usignup.component.css']
})
export class UsignupComponent implements OnInit {

  constructor(private http:HttpClient,private commonService:CommonService  ) {  }
  first;second;
  ngOnInit() {
  }
  
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
  register(form){
    console.log(form.value.email,form.value.pass,form.value.c_pass);
    const data=new Upass(form.value.email,form.value.pass,form.value.c_pass);
    
    const c = data;
    
    const req=this.http.post('http://localhost:8091/api/user',c).toPromise()
    .then((data:any)=>{
      console.log(data);
    })
  }

}
