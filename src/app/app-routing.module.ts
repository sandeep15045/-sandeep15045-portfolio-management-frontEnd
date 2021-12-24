import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './profile/course.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './login/joinnow.component';
import { SellComponent } from './sell/sell.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'course',component:CourseComponent,canActivate:[AuthGuard]},
  {path:'joinnow',component:JoinnowComponent},
  {path:'sell',component:SellComponent},
  {path:'about/:id',component:AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
