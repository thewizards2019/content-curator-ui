import { Injectable } from '@angular/core';
import { TrainingPost } from '../models/TrainingPost.model'
import { Post } from '../models/Post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private trainingPosts: TrainingPost[] = [];

  constructor() {
    this.trainingPosts = [new TrainingPost(1, "This is test content1"), new TrainingPost(2, "This is test content2")]
  }

  getTraining(): Observable<any> {
    const trainingPostsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.trainingPosts);
      }, 1000);
    });

    return trainingPostsObservable;
  }

  setPostPreference(id: number, showMore: boolean) {
    // TODO: Post id to api
    this.updatePost(id, showMore);
  }

  updatePost(id, showMore){
    const index = this.trainingPosts.findIndex((e) => e.id === id);

    if (index === -1) {
      //TODO: Should be an error.
      return;
    } else {
        this.trainingPosts[index].showMore = showMore
    }

    // TODO: Update through API

    // TODO: Fix this stuff
    //delete this.trainingPosts[index]
  }
}
