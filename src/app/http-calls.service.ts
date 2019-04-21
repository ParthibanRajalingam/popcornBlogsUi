import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

 // tempUrl = 'http://localhost:3000';
 tempUrl = 'https://popcornapi.herokuapp.com';
  constructor(private http: HttpClient) { }

  public getCategories() {

    return this.http.get(this.tempUrl + '/categories');

  }
    public getAllPosts()  {

    return this.http.get(this.tempUrl + '/allPosts');

  }
    public getDetailedBlog (id) {

    return this.http.get(this.tempUrl + '/detailedPost/' + id);

  }

    public getFeaturedPosts()  {

    return this.http.get(this.tempUrl + '/featuredPosts');

  }

    public putComment(data)  {

    return this.http.put(this.tempUrl + '/comments',data);

  }
}
