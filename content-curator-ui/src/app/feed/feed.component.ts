import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/feed/feed.service'
import { Post } from 'src/app/models/Post.model'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feed: Post[];
  
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    const feedObservable = this.feedService.getFeed();
    feedObservable.subscribe((feedData: Post[]) => {
      this.feed = feedData
    });
  }
}
