import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {

  invalidLogin: boolean = false;

  constructor(private router:Router,private httpClient:HttpClient) { }


  ngOnInit(): void {
  }

  Login(formValue:NgForm){

    const credentials={
  
     "email":formValue.value.username,
  
     "password":formValue.value.password
  
    }
  
    console.log(credentials);
  
    this.httpClient.post("https://localhost:44311/api/Auth/createtoken",credentials)
  
    .subscribe(response=>{
  
     const token=(<any>response).token;
  
     localStorage.setItem("jwt",token);
  
     this.invalidLogin=false;
  
     console.log(token);
  
     this.router.navigate(["/course"]);
  
    },err=>{
  
     this.invalidLogin=true;
  
    }
  
    )
  
   }
  
  
}
