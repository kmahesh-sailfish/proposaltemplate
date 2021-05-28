import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicateProposalComponent } from './replicate-proposal.component';

describe('ReplicateProposalComponent', () => {
  let component: ReplicateProposalComponent;
  let fixture: ComponentFixture<ReplicateProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplicateProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicateProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
