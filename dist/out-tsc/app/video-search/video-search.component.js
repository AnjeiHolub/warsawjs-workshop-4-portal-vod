var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LatestVideoService } from "../video-list/latest-video.service";
export var VideoSearchComponent = (function () {
    function VideoSearchComponent(latestVideoService) {
        this.latestVideoService = latestVideoService;
        this.videos = [];
    }
    VideoSearchComponent.prototype.ngOnInit = function () {
    };
    VideoSearchComponent.prototype.search = function (phrase) {
        var _this = this;
        if (!phrase) {
            return;
        }
        this.latestVideoService.searchVideosByTitle(phrase)
            .then(function (videos) {
            _this.videos = videos;
        });
    };
    VideoSearchComponent = __decorate([
        Component({
            selector: 'app-video-search',
            templateUrl: './video-search.component.html',
            styleUrls: ['./video-search.component.css'],
            providers: [
                LatestVideoService
            ]
        }), 
        __metadata('design:paramtypes', [LatestVideoService])
    ], VideoSearchComponent);
    return VideoSearchComponent;
}());
//# sourceMappingURL=/Users/Anjei/Desktop/work/Development/vod/warsawjs-workshop-4-portal-vod/src/app/video-search/video-search.component.js.map