import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
 

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
   product =[];

  constructor(private memberService:MemberService,private router:Router) { }
  gotoid(id:number){
    this.router.navigate(["/about",id]);
  }

  ngOnInit() {
this.memberService.getRequest().subscribe((data:any[])=>{

  this.product=data;
  
})
  }
}
