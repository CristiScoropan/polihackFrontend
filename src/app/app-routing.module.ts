import { RouterModule, Routes } from "@angular/router";
import { QuizesComponent } from "./quizes/quizes.component";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import { NgModule } from "@angular/core";
import { authGuard } from "./core/guards/auth.guard";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    // canActivate: [authGuard] 
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: '', component: NavbarComponent, children: [
      { path: 'quizes', component: QuizesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
