import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GoogleSheetsService } from '../services/googlesheets.service';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrls: ['./course-data.component.scss']
})
export class CourseDataComponent {

  courseId: any;
  courses: any;
  youTube: any;
  items: any;

  constructor(
    private sanitizer: DomSanitizer,
    private googleSheetsService: GoogleSheetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('courseId');
      if (this.courseId) {
        this.fetchCourseData(this.courseId);
      }
    });
  }

  fetchCourseData(courseId: string): void {
    this.getAllCourses(courseId);
    this.getCourseDetails(courseId);
  }

  getAllCourses(courseId: string): void {
    this.googleSheetsService.getAllCourses().subscribe(
      (response: any) => {
        const sheetData = response.values;
        if (sheetData?.length > 0) {
          const headers = sheetData[0];
          const colIndex = (colName: string) => headers.indexOf(colName);
          const data = sheetData.slice(1).map((course: any) => ({
            courseId: course[colIndex('courseId')],
            courseName: course[colIndex('courseName')],
            imageUrl: course[colIndex('imageUrl')],
            description: course[colIndex('description')],
            rate: course[colIndex('rate')],
            duration: course[colIndex('duration')],
            totalVideo: course[colIndex('totalVideo')],
          }));
          this.courses = data.find((c: any) => c.courseId === courseId);
        }
      },
      (error: any) => console.error('Error fetching courses:', error)
    );
  }

  getCourseDetails(courseId: string): void {
    this.googleSheetsService.getCourseDetails(courseId).subscribe(
      (response: any) => {
        const sheetData = response.values;
        if (sheetData?.length > 0) {
          const headers = sheetData[0];
          const colIndex = (colName: string) => headers.indexOf(colName);
          this.youTube = sheetData.slice(1).map((course: any) => ({
            videoTitle: course[colIndex('videoTitle')],
            videoUrl: course[colIndex('videoUrl')],
            videoProfile: course[colIndex('videoProfile')],
          }));
        }
      },
      (error: any) => console.error('Error fetching course details:', error)
    );
  }

  private sanitizedUrls: { [key: string]: SafeResourceUrl } = {};

  sanitizeUrl(url: string): SafeResourceUrl {
    if (!this.sanitizedUrls[url]) {
      const videoId = this.extractVideoId(url);
      this.sanitizedUrls[url] = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}`
      );
    }
    return this.sanitizedUrls[url];
  }

  private extractVideoId(url: string): string | null {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*v=([^&\s]+)|youtu\.be\/([^&\s]+)/;
    const match = url.match(regex);
    return match ? match[1] || match[2] : null;
  }

  itemDetail(item: any): void {
    this.items = item;
  }
}
