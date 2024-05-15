import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

export const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'pdf', component: PdfViewerComponent},
    { path: 'auth/login', component: LoginComponent },
];
