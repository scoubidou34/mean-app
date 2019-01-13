import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { StreamComponent } from './stream/stream.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
