import { Component, EventEmitter, Output } from '@angular/core';
import { GoogleSheetsService } from '../services/googlesheets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: any[] = [];

 
  constructor(
    private googleSheetsService: GoogleSheetsService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  allCourses: any[] = [];

  getAllCourses(): void {
    this.googleSheetsService.getAllCourses().subscribe(
      (response: any) => {
        const sheetData = response.values;
        if (sheetData?.length > 0) {
          const headers = sheetData[0];
          const colIndex = (colName: string) => headers.indexOf(colName);
          this.allCourses = sheetData.slice(1).map((course: any) => ({
            courseId: course[colIndex('courseId')],
            courseName: course[colIndex('courseName')],
            imageUrl: course[colIndex('imageUrl')],
            description: course[colIndex('description')],
            rate: course[colIndex('rate')],
            duration: course[colIndex('duration')],
            totalVideo: course[colIndex('totalVideo')],
          }));
          this.courses = this.allCourses.slice(0, 4);
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  


 






}
