import { Component, OnInit } from '@angular/core';
// import { FeedService } from 'src/app/feed/feed.service'
import { Post } from 'src/app/models/Post.model'
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  results: Post[] = [];
  subscription: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // lets do some mad processing in here, to filter out the values!
    this.apiService.getAllData().subscribe((items: Post[]) => this.filterResults(items));
    this.startPoll(10000);
  }


  startPoll(pollingInterval: number): void {
    console.log('start poll');
    this.subscription = timer(0, pollingInterval).subscribe(_ =>
      this.apiService.getAllData().subscribe((items: Post[]) => this.filterResults(items))
    );
  }

  setClass(post: Post) {
    if (post.exclude === true) {
      return "frosted";
    }
  }

  filterResults(items) {
    const userSettings = this.apiService.getUserSettings();
    this.results = [];
    items.forEach(x => {
      console.log(userSettings.profanityValue, userSettings.sentimentValue);
      //  get this setting from the backend
      if (x.PROFANITY === userSettings.profanityValue && userSettings.sentimentValue > parseFloat(x.SENTIMENT)) {
        x.exclude = false;
        this.results.push(x);
      }
      else {
        x.exclude = true;
        this.results.push(x);
      }
    });
  }
}
