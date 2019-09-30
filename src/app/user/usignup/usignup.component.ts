import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Upass } from './Upass';

@Component({
  selector: 'app-usignup',
  templateUrl: './usignup.component.html',
  styleUrls: ['./usignup.component.css']
})
export class UsignupComponent implements OnInit {

  constructor(private http:HttpClient) {  }
  email="";
  pass="";
  c_pass="";
  ngOnInit() {
  }
  register(){
    const data=new Upass(this.email,this.pass,this.c_pass);
    const c = data;
    const req=this.http.post('http://localhost:8091/api/user',c).toPromise()
    .then((data:any)=>{
      console.log(data);
    })
  }

}
