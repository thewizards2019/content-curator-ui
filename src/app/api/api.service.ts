import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from 'src/app/models/Post.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { TrainingPost } from '../models/TrainingPost.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // dataCuratorUri: string = 'http://127.0.0.1/'
  // feedUri: string = 'http://127.0.0.1:5000/feed/'
  private allData: string = 'http://localhost:8080/all';
  private tagDataUrl: string = 'http://localhost:5000/tag/';

  public userSettings = {
    sentimentValue: 0.5,
    profanityValue: 'false'
  };

  constructor(private httpClient: HttpClient) { }

  // tagPost(uuid: string, tag: boolean) {
  //   var url = this.dataCuratorUri + "tag/" + uuid + "/" + tag;

  //   this.httpClient.post(url, null)
  // }

  getAllData(): Observable<Post[]> {
    return this.httpClient.get(this.allData) as Observable<Post[]>;
  }

  getUserSettings() {
    // tomorrow this will call to scala and get the data from the materilized view
    // for now return in memory config
    return this.userSettings;
  }

  tagData(UUID: string, showMore: boolean) {
    let showValue = 0;
    if (showMore === true) {
      showValue = 1;
    } else {
      showValue = 0;
    }

    const urlToCall = this.tagDataUrl + UUID + '/' + showValue;
    this.httpClient.post(urlToCall, null)
      .subscribe();
  }

  setUserSettings(settingType, settingValue) {
    // tomorrow we will publish to kafka via tagging
    // set them in memory for now
    this.userSettings[settingType] = settingValue;
    console.log('Updated User Settings', this.userSettings);
  }
}