import { Component, OnInit, Input } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector :  'app-all-posts',
  templateUrl :  './all-posts.component.html',
  styleUrls :  ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

    @Input() testdata: any;
    p: number;
  constructor() {   }



  ngOnInit() {
       console.log(this.testdata);
    AOS.init();
  }

  onNextClick() {
      try {
     window.scrollTo({ left: 0, top: 800, behavior: 'smooth' });
     } catch (e) {
      window.scrollTo(0, 0);
      }
  }

}
