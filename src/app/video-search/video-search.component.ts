import { Component, OnInit } from '@angular/core';
import {LatestVideoService} from "../video-list/latest-video.service";

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css'],
  providers: [
    LatestVideoService
  ]
})
export class VideoSearchComponent implements OnInit {
  videos: any []=[];
  constructor(private latestVideoService: LatestVideoService) { }

  ngOnInit() {
  }

  search(phrase) {
    if (!phrase) {
      return;
    }
    this.latestVideoService.searchVideosByTitle(phrase)
      .then((videos) => {
        this.videos = videos;
      })
  }

}
