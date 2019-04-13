import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model'
import { Observable, observable } from 'rxjs';
import { ApiService } from 'src/app/api/api.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private apiService : ApiService, private httpClient: HttpClient) {
  }

  getFeed() : Observable<Post[]>{
    /*
    const postsObservable = new Observable(observer => {
      setTimeout(() => {
          observer.next(this.posts);
      }, 1000);
    });
    
    return postsObservable;
    */

   var url = '/api/feed';
    

   return this.httpClient.get<Post[]>(url);  

    //return this.apiService.getFeed();
  }
}
