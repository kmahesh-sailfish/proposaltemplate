import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelgateProposalWorkflowComponent } from './delgate-proposal-workflow.component';

describe('DelgateProposalWorkflowComponent', () => {
  let component: DelgateProposalWorkflowComponent;
  let fixture: ComponentFixture<DelgateProposalWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelgateProposalWorkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelgateProposalWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
