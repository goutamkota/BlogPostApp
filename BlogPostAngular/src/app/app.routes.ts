import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { authGuard } from './auth.guard';
import { CreateUpdateBlogComponent } from './create-update-blog/create-update-blog.component';
import { ShowMyBlogsComponent } from './show-my-blogs/show-my-blogs.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]
  },
  {
    path: 'create-blog', component: CreateUpdateBlogComponent
  },
  {
    path: 'create-blog/:id', component: CreateUpdateBlogComponent
  },
  {
    path: 'show-my-blogs', component: ShowMyBlogsComponent
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];
