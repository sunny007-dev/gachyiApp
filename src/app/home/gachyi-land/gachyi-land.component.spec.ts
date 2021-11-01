import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GachyiLandComponent } from './gachyi-land.component';

describe('GachyiLandComponent', () => {
  let component: GachyiLandComponent;
  let fixture: ComponentFixture<GachyiLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GachyiLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GachyiLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
