import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model'
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private posts: Post[] = [];

  constructor() {
    this.posts = [new Post(1, "This is content1"), new Post(2, "This is content2")]
  }

  getFeed() : Observable<any> {
    const postsObservable = new Observable(observer => {
      setTimeout(() => {
          observer.next(this.posts);
      }, 1000);
    });

    return postsObservable;
  }
}
