import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from '../http-calls.service';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.css']
})
export class FeaturedPostsComponent implements OnInit {


featuredPostsBg = '../assets/images/thumbs/featured/featured-guitarman.jpg';
  getFeaturedPosts =[];

featuredPost = [];
  constructor(private http: HttpCallsService) { }

  ngOnInit() {
        this.http.getFeaturedPosts().subscribe(data => {
         this.featuredPost.push(data);
         this.getFeaturedPosts.push(...this.featuredPost[0]);
    }, error => {
      alert(error);
    });
  }
}
