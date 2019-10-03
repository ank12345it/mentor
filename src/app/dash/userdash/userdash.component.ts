import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
 username='';
  constructor(private myServ:CommonService,private router:Router) {
    this.myServ.getUserName().subscribe(
      data=>this.username=data.toString(),
      error=>this.router.navigate(['Userlog'])
    )
   }

  ngOnInit() {
  }
  
logout(){
  localStorage.removeItem('token');
  this.router.navigate(['Userlog']);
}
}
