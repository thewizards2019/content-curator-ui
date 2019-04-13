import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/train/train.service'
import { TrainingPost } from 'src/app/models/TrainingPost.model'

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {
  trainingFeed: TrainingPost[];

  constructor(private trainingService: TrainService) { }

  ngOnInit() {
    const trainingObservable = this.trainingService.getTraining();
    trainingObservable.subscribe((trainingData: TrainingPost[])=>{
      this.trainingFeed = trainingData
    });
  }

  rank(id: number, showMore: boolean){
    console.log("ID: " + id + " | Show More: " + showMore)
    this.trainingService.setPostPreference(id, showMore);
  }
}
