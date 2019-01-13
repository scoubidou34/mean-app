import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { TouchSequence } from 'selenium-webdriver';
 


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  posts: any = [];
  cpuName : string ="unknown";
  cpuClient : string ="unknown";
  constructor(private postsService: PostsService) { }

  ngOnInit() {
   
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;      
    });
    this.postsService.getCpuName().subscribe(cpu => {
      this.cpuName=cpu.text();
    });
    this.cpuClient=window.navigator.platform;

    
  }
}