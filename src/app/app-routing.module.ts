import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signup' , component : SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {anchorScrolling : 'enabled'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
