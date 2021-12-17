import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcoursedetailsComponent } from './addcoursedetails.component';

describe('AddcoursedetailsComponent', () => {
  let component: AddcoursedetailsComponent;
  let fixture: ComponentFixture<AddcoursedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcoursedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcoursedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
