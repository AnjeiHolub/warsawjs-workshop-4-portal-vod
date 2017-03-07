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
export var LatestVideoListComponent = (function () {
    function LatestVideoListComponent(latestVideoService) {
        this.latestVideoService = latestVideoService;
        this.videos = [];
    }
    LatestVideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.latestVideoService.getVideos()
            .then(function (VIDEOS) {
            _this.videos = VIDEOS;
        });
    };
    LatestVideoListComponent = __decorate([
        Component({
            selector: 'app-latest-video-list',
            templateUrl: './latest-video-list.component.html',
            styleUrls: ['./latest-video-list.component.css'],
            providers: [
                LatestVideoService
            ]
        }), 
        __metadata('design:paramtypes', [LatestVideoService])
    ], LatestVideoListComponent);
    return LatestVideoListComponent;
}());
//# sourceMappingURL=/Users/Anjei/Desktop/work/Development/vod/warsawjs-workshop-4-portal-vod/src/app/latest-video-list/latest-video-list.component.js.map