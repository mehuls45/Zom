import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroDetailComponent } from './restro-detail.component';

describe('RestroDetailComponent', () => {
  let component: RestroDetailComponent;
  let fixture: ComponentFixture<RestroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
