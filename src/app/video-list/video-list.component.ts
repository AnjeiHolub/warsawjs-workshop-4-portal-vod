import {Component, OnInit, Input} from '@angular/core';
import { LatestVideoService } from "./latest-video.service";
import {LatestVideoListComponent} from "../latest-video-list/latest-video-list.component";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})

export class VideoListComponent implements OnInit {

  @Input() videos: any[] = [];

  constructor() { }

  ngOnInit() {

  }

}
