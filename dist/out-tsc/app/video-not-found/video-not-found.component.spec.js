import { async, TestBed } from '@angular/core/testing';
import { VideoNotFoundComponent } from './video-not-found.component';
describe('VideoNotFoundComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [VideoNotFoundComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(VideoNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/Anjei/Desktop/work/Development/vod/warsawjs-workshop-4-portal-vod/src/app/video-not-found/video-not-found.component.spec.js.map