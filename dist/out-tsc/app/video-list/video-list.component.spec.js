import { async, TestBed } from '@angular/core/testing';
import { VideoListComponent } from './video-list.component';
describe('VideoListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [VideoListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(VideoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/Anjei/Desktop/work/Development/vod/warsawjs-workshop-4-portal-vod/src/app/video-list/video-list.component.spec.js.map