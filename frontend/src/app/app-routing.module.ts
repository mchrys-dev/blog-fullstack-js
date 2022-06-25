import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'update-post/:id', component: UpdatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
