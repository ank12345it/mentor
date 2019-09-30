import { Component, OnInit } from '@angular/core';
import {User} from '../user1';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {
 userList:User[]=[];
  constructor() { }
 adduser(form){
   console.log(form.value.name);
 }
  ngOnInit() {
  }

}
