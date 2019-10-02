import { Component, OnInit } from '@angular/core';
import {User} from '../user1';
import { Ulog } from './ulog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {
 userList:User[]=[];
  constructor(private http:HttpClient) { }
  ngOnInit() {
  }
 login(form){
  const data=new Ulog(form.value.email,form.value.pass);
    
  const c = data;
  
  const req=this.http.post('http://localhost:8091/api/login',c).toPromise()
  .then((data:any)=>{
    console.log(data);
    localStorage.setItem('token',data.toString());
  },
  error=>{}
  )
}
 }
  


