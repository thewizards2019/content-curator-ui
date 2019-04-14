import { Component, OnInit } from '@angular/core';
// import { TrainService } from 'src/app/train/train.service'
import { Post } from 'src/app/models/Post.model';
import { timer, Subscription } from 'rxjs';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  results: Post[] = [];
  subscription: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllData().subscribe((items: Post[]) => this.results = items);
    this.startPoll(10000);
  }

  startPoll(pollingInterval: number): void {
    console.log('start poll');
    this.subscription = timer(0, pollingInterval).subscribe(_ =>
      this.apiService.getAllData().subscribe((items: Post[]) => this.results = items)
    );
  }

  rank(post: Post, showMore: boolean) {
    console.log(post.UUID);
    this.apiService.tagData(post.UUID, showMore);

    post.HIDE = !showMore;
  }

  // rank(id: number, showMore: boolean){
  //   console.log("ID: " + id + " | Show More: " + showMore)
  //   this.trainingService.setPostPreference(id, showMore);
  // }
}
