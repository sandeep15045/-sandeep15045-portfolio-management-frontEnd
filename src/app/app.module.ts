import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './profile/course.component';
import { JoinnowComponent } from './login/joinnow.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberService } from './member.service';
import { SellComponent } from './sell/sell.component';

import { MutualfundComponent } from './mutualfund/mutualfund.component';

import { NavbarComponent } from './navbar/navbar.component';


export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    JoinnowComponent,
    AboutComponent,
    SellComponent,
    MutualfundComponent,
    NavbarComponent
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:44311"],
        disallowedRoutes:[]
      }
    })

  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
