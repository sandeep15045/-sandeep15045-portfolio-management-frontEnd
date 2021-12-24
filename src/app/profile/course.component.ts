import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 

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
  console.log(data);
  this.product=data;
  
})
  }
  course= [
    {'id':1,'name':'STOCKS','description':'TOTAL STOCKS-','image':'../../assets/angular.jpg'},
    {'id':2,'name':'MUTUAL FUNDS','description':'TOTSL MUTUAL FUNDS-','image':'../../assets/typescript.jpg'},
    {'id':3,'name':'MUTUAL FUNDS','description':'TOTSL MUTUAL FUNDS-','image':'../../assets/typescript.jpg'},
    
  ]
}
