import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulesSectionComponent } from './capsules-section.component';

describe('CapsulesSectionComponent', () => {
  let component: CapsulesSectionComponent;
  let fixture: ComponentFixture<CapsulesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsulesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsulesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
