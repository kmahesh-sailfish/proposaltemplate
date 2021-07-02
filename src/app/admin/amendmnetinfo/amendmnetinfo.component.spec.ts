import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendmnetinfoComponent } from './amendmnetinfo.component';

describe('AmendmnetinfoComponent', () => {
  let component: AmendmnetinfoComponent;
  let fixture: ComponentFixture<AmendmnetinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmendmnetinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmendmnetinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
