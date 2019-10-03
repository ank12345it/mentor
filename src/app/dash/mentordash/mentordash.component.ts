import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentordash',
  templateUrl: './mentordash.component.html',
  styleUrls: ['./mentordash.component.css']
})
export class MentordashComponent implements OnInit {
mentorname='';
  constructor(private myServ:CommonService,private router:Router) {     this.myServ.getMentorName().subscribe(
    data=>this.mentorname=data.toString(),
    error=>this.router.navigate(['Mentorlog'])
  )}

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['Mentorlog']);
  }

}
