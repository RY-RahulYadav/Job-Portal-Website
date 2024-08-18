import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { SearchJobComponent } from './page/search-job/search-job.component';
import { ContantUsComponent } from './page/contant-us/contant-us.component';
import { CandidatesInfoComponent } from './page/candidates-info/candidates-info.component';
import { JobDetailComponent } from './page/job-detail/job-detail.component';
import { JobPostComponent } from './page/job-post/job-post.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { RecruiterComponent } from './page/recruiter/recruiter.component';
import { inject } from '@angular/core';
import { UserStatusService } from './service/dataService/user-status.service';
import { UserComponent } from './page/user/user.component';
import { NotFoundComponent } from './page/not-found/not-found.component';






export const routes: Routes = [
    {path:"" , component:HomeComponent},
    {path:'about' , component:AboutComponent},
    {path:'search-job' , component:SearchJobComponent},
    {path:'contact'  , component:ContantUsComponent},
    {path:'user/:type/:name/:Id' , component: UserComponent},
    {path:'job-detail/:id' , component:JobDetailComponent},
    {path:'jobpost' , component:JobPostComponent},
    {path:'login' , component:LoginComponent},
    {path:'signup' , component:SignupComponent},
    {path:'recruiter' , component:RecruiterComponent},
    {path:'**' , component:NotFoundComponent},

];

