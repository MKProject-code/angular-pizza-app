import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocjeComponent } from './promocje.component';

describe('PromocjeComponent', () => {
  let component: PromocjeComponent;
  let fixture: ComponentFixture<PromocjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
