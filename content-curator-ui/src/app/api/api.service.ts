import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from 'src/app/models/Post.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  dataCuratorUri: string = 'http://127.0.0.1/'
  feedUri: string = 'http://127.0.0.1:5000/feed/'

  constructor(private httpClient: HttpClient) { }

  tagPost(uuid: string, tag: boolean){
      var url = this.dataCuratorUri + "tag/" + uuid + "/" + tag;

      this.httpClient.post(url, null)
  }

  getFeed(){
    var url = this.feedUri;
    

    return this.httpClient
      .get<Post[]>(url);
      /*
      .map(response => 
        {
          const posts = response.json();
          return posts.map((post) => new Post(post))
        })
        */
    // return this.httpClient.get<Post[]>(url, { observe : "response"}).subscribe();
  }
}