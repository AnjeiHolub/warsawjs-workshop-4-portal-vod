var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { VIDEOS } from './mock-videos';
export var LatestVideoService = (function () {
    function LatestVideoService() {
    }
    LatestVideoService.prototype.getVideos = function () {
        return Promise.resolve(VIDEOS);
    };
    LatestVideoService.prototype.getVideo = function (id) {
        return this.getVideos()
            .then(function (videos) {
            return videos.find(function (video) {
                return video.id == id;
            });
        });
    };
    LatestVideoService.prototype.searchVideosByTitle = function (phrase) {
        return this.getVideos()
            .then(function (videos) {
            return videos.filter(function (video) {
                return new RegExp(phrase, 'i').test(video.title);
            });
        });
    };
    LatestVideoService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], LatestVideoService);
    return LatestVideoService;
}());
//# sourceMappingURL=/Users/Anjei/Desktop/work/Development/vod/warsawjs-workshop-4-portal-vod/src/app/video-list/latest-video.service.js.map