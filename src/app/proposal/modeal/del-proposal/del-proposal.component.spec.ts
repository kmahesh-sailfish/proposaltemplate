import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelProposalComponent } from './del-proposal.component';

describe('DelProposalComponent', () => {
  let component: DelProposalComponent;
  let fixture: ComponentFixture<DelProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
