import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveActionsComponent } from './archive-actions.component';

describe('ArchiveActionsComponent', () => {
  let component: ArchiveActionsComponent;
  let fixture: ComponentFixture<ArchiveActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
