import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { OpenAiComponent } from './open-ai/open-ai.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';


export const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'pdf', component: PdfViewerComponent},
    { path: 'open-ai', component: OpenAiComponent},
    { path: 'auth/login', component: LoginComponent },
    { path: 'home', component: HomeComponent},
    { path: 'features', component: FeaturesComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
