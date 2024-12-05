import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAllCourseComponent } from './our-all-course.component';

describe('OurAllCourseComponent', () => {
  let component: OurAllCourseComponent;
  let fixture: ComponentFixture<OurAllCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurAllCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurAllCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
