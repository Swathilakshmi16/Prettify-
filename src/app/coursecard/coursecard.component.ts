import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrl: './coursecard.component.scss'
})
export class CoursecardComponent {
  @Input() courses: any; 
  
}
