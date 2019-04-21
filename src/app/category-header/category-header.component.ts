import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpCallsService } from '../http-calls.service';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.css']
})
export class CategoryHeaderComponent implements OnInit {


  categoryType: String;
  mainCategory: String;
  categories: any;
  constructor(private route: ActivatedRoute, private http: HttpCallsService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.categoryType = params.type;
        this.mainCategory = params.main;
        console.log(this.categoryType); // popular
      });

    this.http.getCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    }, error => {
      this.categories = [{ 'mainCategory': 'Entertainment', 'subCategories': [{ 'name': 'Gaming', 'quote': '' }, { 'name': 'Movies', 'quote': '' }, { 'name': 'Tv Shows', 'quote': '' }] }, { 'mainCategory': 'Interesting', 'subCategories': [{ 'name': 'Creepy', 'quote': '' }, { 'name': 'Mysteries', 'quote': '' }, { 'name': 'Weird', 'quote': '' }] }, { 'mainCategory': 'General Knowledge', 'subCategories': [{ 'name': 'Books', 'quote': '' }, { 'name': 'History', 'quote': '' }, { 'name': 'Facts', 'quote': '' }] }, { 'mainCategory': 'Life Style', 'subCategories': [{ 'name': 'Health', 'quote': '' }, { 'name': 'Food', 'quote': '' }, { 'name': 'Travel', 'quote': '' }] }, { 'mainCategory': 'Science', 'subCategories': [{ 'name': 'Technology', 'quote': '' }, { 'name': 'Space', 'quote': '' }, { 'name': 'Animals', 'quote': '' }, { 'name': 'Our World', 'quote': '' }] }];

    });
  }



}
