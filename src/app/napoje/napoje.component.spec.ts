import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NapojeComponent } from './napoje.component';

describe('NapojeComponent', () => {
  let component: NapojeComponent;
  let fixture: ComponentFixture<NapojeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NapojeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NapojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
