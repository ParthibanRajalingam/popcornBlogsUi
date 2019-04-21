import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from '../http-calls.service';

@Component({
  selector: 'app-popular-posts',
  templateUrl: './popular-posts.component.html',
  styleUrls: ['./popular-posts.component.css']
})
export class PopularPostsComponent implements OnInit {

getPopularposts =[
{
  'title': 'Visiting Theme Parks Improves Your Health.',
  'imageSrc': '../assets/images/thumbs/small/wheel-150.jpg',
  'authorName' : 'John Doe',
  'postedDate' : 'Dec 12, 2017'
},
{
  'title': 'Absolutely No Sugar Oatmeal Cookies.',
  'imageSrc': '../assets/images/thumbs/small/shutterbug-150.jpg',
  'authorName' : 'John Doe',
  'postedDate' : 'Dec 12, 2017'
},
{
  'title': '10 Interesting Facts About Caffeine.',
  'imageSrc': '../assets/images/thumbs/small/cookies-150.jpg',
  'authorName' : 'John Doe',
  'postedDate' : 'Dec 12, 2017'
},
{
  'title': 'Key Benefits Of Family Photography.',
  'imageSrc': '../assets/images/thumbs/small/beetle-150.jpg',
  'authorName' : 'John Doe',
  'postedDate' : 'Dec 12, 2017'
},
{
  'title': 'Throwback To The Good Old Days.',
  'imageSrc': '../assets/images/thumbs/small/tulips-150.jpg',
  'authorName' : 'John Doe',
  'postedDate' : 'Dec 12, 2017'
},
{
  'title': 'Healthy Mediterranean Salad Recipes',
  'imageSrc': '../assets/images/thumbs/small/salad-150.jpg',
  'authorName' : 'John Doe',
  'postedDate' : 'Dec 12, 2017'
}
];
  constructor(private http: HttpCallsService ) { }

  ngOnInit() {

  }

}
