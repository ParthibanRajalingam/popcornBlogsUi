import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {



  getAllTags = [
    {
      'tags': ['Salad', 'Recipe', 'Places', 'Tips', 'Friends', 'Travel', 'Exercise', 'Reading', 'Running', 'Self-Help', 'Vacation']
    }
    ];

    tags =  this.getAllTags[0].tags;

  constructor() { }

  ngOnInit() {
  }

}
