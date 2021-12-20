import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentheaderComponent } from './studentheader.component';

describe('StudentheaderComponent', () => {
  let component: StudentheaderComponent;
  let fixture: ComponentFixture<StudentheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
