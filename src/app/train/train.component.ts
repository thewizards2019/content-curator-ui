import { Component, OnInit } from '@angular/core';
// import { TrainService } from 'src/app/train/train.service'
// import { TrainingPost } from 'src/app/models/TrainingPost.model'

import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  results = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllData().subscribe((items: any) => this.results = items);
  }

  // rank(id: number, showMore: boolean){
  //   console.log("ID: " + id + " | Show More: " + showMore)
  //   this.trainingService.setPostPreference(id, showMore);
  // }
}
