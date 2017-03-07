import {Component, OnInit, Input} from '@angular/core';
import {LatestVideoService} from "../video-list/latest-video.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [LatestVideoService]
})

export class VideoComponent implements OnInit {
  video: any;

  constructor(private latestVideoService: LatestVideoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        console.log(params['id']);
        return this.latestVideoService.getVideo(params['id']);
      })
      .subscribe(video => {

        if (!video) {
          return this.router.navigate(['video-not-found'])
        }
        this.video = video;
      });
    // this.latestVideoService.getVideos()
    //   .then((videos) => {
    //     this.video = videos[0];
    //   })
  }

}
