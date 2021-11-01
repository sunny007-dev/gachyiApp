import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetItKnowComponent } from './get-it-know.component';

describe('GetItKnowComponent', () => {
  let component: GetItKnowComponent;
  let fixture: ComponentFixture<GetItKnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetItKnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetItKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
