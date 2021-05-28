import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAmendentComponent } from './download-amendent.component';

describe('DownloadAmendentComponent', () => {
  let component: DownloadAmendentComponent;
  let fixture: ComponentFixture<DownloadAmendentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadAmendentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadAmendentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
