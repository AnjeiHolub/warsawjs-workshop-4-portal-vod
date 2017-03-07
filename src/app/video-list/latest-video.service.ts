import { Injectable } from '@angular/core';
import { VIDEOS } from './mock-videos';

@Injectable()
export class LatestVideoService {

  constructor() { }

  getVideos(): Promise<any[]> {
    return Promise.resolve(VIDEOS);
  }

  getVideo(id: string) {
    return this.getVideos()
      .then((videos) => {
        return videos.find((video) => {
          return video.id == id;
        })
      })
  }

  searchVideosByTitle(phrase: string): Promise<any[]> {
    return this.getVideos()
      .then((videos) => {
        return videos.filter((video) => {
          return new RegExp(phrase, 'i').test(video.title);
        })
      })
  }

}
