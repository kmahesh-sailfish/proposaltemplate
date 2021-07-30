import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliCtmComponent } from './publi-ctm.component';

describe('PubliCtmComponent', () => {
  let component: PubliCtmComponent;
  let fixture: ComponentFixture<PubliCtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubliCtmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliCtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
