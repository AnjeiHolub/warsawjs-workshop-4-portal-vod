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
import { ActivatedRoute, Router } from "@angular/router";
import 'rxjs/add/operator/switchMap';
export var VideoComponent = (function () {
    function VideoComponent(latestVideoService, route, router) {
        this.latestVideoService = latestVideoService;
        this.route = route;
        this.router = router;
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            console.log(params['id']);
            return _this.latestVideoService.getVideo(params['id']);
        })
            .subscribe(function (video) {
            if (!video) {
                return _this.router.navigate(['video-not-found']);
            }
            _this.video = video;
        });
        // this.latestVideoService.getVideos()
        //   .then((videos) => {
        //     this.video = videos[0];
        //   })
    };
    VideoComponent = __decorate([
        Component({
            selector: 'app-video',
            templateUrl: './video.component.html',
            styleUrls: ['./video.component.css'],
            providers: [LatestVideoService]
        }), 
        __metadata('design:paramtypes', [LatestVideoService, ActivatedRoute, Router])
    ], VideoComponent);
    return VideoComponent;
}());
//# sourceMappingURL=/Users/Anjei/Desktop/work/Development/vod/warsawjs-workshop-4-portal-vod/src/app/video/video.component.js.map