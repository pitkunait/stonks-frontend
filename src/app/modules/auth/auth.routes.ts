import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


export const authRoutes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
];
