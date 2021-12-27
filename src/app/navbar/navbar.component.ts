import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  product =[];
  isLoggedIn: boolean;

  constructor(private memberService:MemberService,private router:Router) { }
  gotoid(id:number){
    this.router.navigate(["/about",id]);
  }

  ngOnInit() {
    this.memberService.getRequest().subscribe((data:any[])=>{

      this.product=data;
  })
  }
  Logout() {
    console.log("hi")
    localStorage.removeItem("jwt")
    this.isLoggedIn = true
    this.router.navigate(['/joinnow'])
  }

}
