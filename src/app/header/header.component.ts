import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from '../http-calls.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  getAllCategories = [
    { 'categories': ['Lifestyle', 'Health', 'Family', 'Management', 'Travel', 'Work'] }
  ];

  categories: any;
  categoryType: String;
  mainCategory: String;

  //categories = this.getAllCategories[0].categories;

  constructor( private http: HttpCallsService) { }

  ngOnInit() {
    this.http.getCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    }, error => {
      this.categories = [{ 'mainCategory': 'Entertainment', 'subCategories': [{ 'name': 'Gaming', 'quote': '' }, { 'name': 'Movies', 'quote': '' }, { 'name': 'Tv Shows', 'quote': '' }] }, { 'mainCategory': 'Interesting', 'subCategories': [{ 'name': 'Creepy', 'quote': '' }, { 'name': 'Mysteries', 'quote': '' }, { 'name': 'Weird', 'quote': '' }] }, { 'mainCategory': 'General Knowledge', 'subCategories': [{ 'name': 'Books', 'quote': '' }, { 'name': 'History', 'quote': '' }, { 'name': 'Facts', 'quote': '' }] }, { 'mainCategory': 'Life Style', 'subCategories': [{ 'name': 'Health', 'quote': '' }, { 'name': 'Food', 'quote': '' }, { 'name': 'Travel', 'quote': '' }] }, { 'mainCategory': 'Science', 'subCategories': [{ 'name': 'Technology', 'quote': '' }, { 'name': 'Space', 'quote': '' }, { 'name': 'Animals', 'quote': '' }, { 'name': 'Our World', 'quote': '' }] }];

    });
  }

}
