import { Component, Input, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../services/googlesheets.service';

@Component({
  selector: 'app-our-all-course',
  templateUrl: './our-all-course.component.html',
  styleUrl: './our-all-course.component.scss'
})
export class OurAllCourseComponent implements OnInit{

  courses: any[] = [];

  constructor(private googleSheetsService: GoogleSheetsService) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.googleSheetsService.getAllCourses().subscribe(
      (response: any) => {
        const sheetData = response.values;
        if (sheetData?.length > 0) {
          const headers = sheetData[0];
          const colIndex = (colName: string) => headers.indexOf(colName);
          this.courses = sheetData.slice(1).map((course: any) => ({
            courseId: course[colIndex('courseId')],
            courseName: course[colIndex('courseName')],
            imageUrl: course[colIndex('imageUrl')],
            description: course[colIndex('description')],
            rate: course[colIndex('rate')],
            duration: course[colIndex('duration')],
            totalVideo: course[colIndex('totalVideo')],
          }));
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }



  // courses=[
  //   {
  //     imageUrl:"../../assets/howitworkimg1.jpg",
  //     courseName:"Aari Work",
  //     describtion:"Learn traditional embroidery techniques with intricate designs using an Aari needle."
  //   },
  //   {
  //     imageUrl:"../../assets/howitworkimg1.jpg",
  //     courseName:"Aari Work",
  //     describtion:"Learn traditional embroidery techniques with intricate designs using an Aari needle."
  //   },
  //   {
  //     imageUrl:"../../assets/howitworkimg1.jpg",
  //     courseName:"Aari Work",
  //     describtion:"Learn traditional embroidery techniques with intricate designs using an Aari needle."
  //   },
  //   {
  //     imageUrl:"../../assets/howitworkimg1.jpg",
  //     courseName:"Aari Work",
  //     describtion:"Learn traditional embroidery techniques with intricate designs using an Aari needle."
  //   }
  // ]
}
