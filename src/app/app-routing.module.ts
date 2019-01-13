import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {StreamComponent} from './stream/stream.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'stream',
  pathMatch: 'full'
},
{
  path: 'posts',
  component: PostsComponent
},
{
  path: 'stream',
  component: StreamComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
