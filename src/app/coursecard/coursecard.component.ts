import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrl: './coursecard.component.scss'
})
export class CoursecardComponent {
  @Input() courses: any; 
  
    constructor(
      private router : Router
    ) {}

  goCourse(course:any){
    this.router.navigate([`courses/${course.courseId}`, { state: { course: course } }])
  }


}
