import { Component, OnInit } from '@angular/core';
// import { TrainService } from 'src/app/train/train.service'
import { Post } from 'src/app/models/Post.model'

import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  results: Post[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllData().subscribe((items: Post[]) => this.results = items);
  }

  rank(post: Post, showMore: boolean){
    this.apiService.tagData(Number(post.UUID), showMore);

    post.HIDE = !showMore;
  }

  // rank(id: number, showMore: boolean){
  //   console.log("ID: " + id + " | Show More: " + showMore)
  //   this.trainingService.setPostPreference(id, showMore);
  // }
}
