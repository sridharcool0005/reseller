import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadapkComponent } from './downloadapk.component';

describe('DownloadapkComponent', () => {
  let component: DownloadapkComponent;
  let fixture: ComponentFixture<DownloadapkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadapkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadapkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
