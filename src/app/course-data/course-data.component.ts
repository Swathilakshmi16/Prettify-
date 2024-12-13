import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GoogleSheetsService } from '../services/googlesheets.service';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrl: './course-data.component.scss'
})
export class CourseDataComponent {

 constructor(
  private sanitizer: DomSanitizer,
  private googleSheetsService : GoogleSheetsService,
      private route : ActivatedRoute
    ) {}


  courseId:any;
  course:any;
  ngOnInit(): void {
    this.course = history.state.course;
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('courseId')!;
      console.log('Course ID:', this.courseId);
      this.getCourseDetails(this.courseId)
    });
  }


  youTube:any;

  getCourseDetails(courseId:any){
    this.googleSheetsService.getCourseDetails(courseId).subscribe(
      (response: any) => {
        const sheetData = response.values;
        if (sheetData?.length > 0) {
          const headers = sheetData[0];
          const colIndex = (colName: string) => headers.indexOf(colName);
          this.youTube = sheetData.slice(1).map((course: any) => ({
            videoTitle: course[colIndex('videoTitle')],
            videoUrl: course[colIndex('videoUrl')],
           
          }));
          console.log(this.youTube, "fdsf")
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }


// [x: string]: any;

//   youTube=[
//     {
//       videoUrl:"https://www.youtube.com/watch?v=bvxiJ5fZe3A",
//       logoUrl:"../../assets/whychimg2.webp",
//       videoTitle:"Intro-Class",
//       classno:"class-1",
//     },
//     {
//       videoUrl:"https://www.youtube.com/watch?v=NChgXc5cIbI",
//       logoUrl:"../../assets/whychimg2.webp",
//       videoTitle:"Aari Journey",
//       classno:"class-2",
     
//     },
//     {
//       videoUrl:"https://www.youtube.com/watch?v=OcvBS4nuX_A",
//       logoUrl:"../../assets/whychimg2.webp",
//       videoTitle:"StitchPath",
//       classno:"class-3",
 
//     },
//     {
//       videoUrl:"https://www.youtube.com/watch?v=T8BfsP5tZUc",
//       logoUrl:"../../assets/whychimg2.webp",
//       videoTitle:"AariSteps",
//       classno:"class-4",
     
//     },
//     {
//       videoUrl:"https://www.youtube.com/watch?v=9fnQ8VmfH4Q",
//       logoUrl:"../../assets/whychimg2.webp",
//       videoTitle:"ThreadWay",
//       classno:"class-5",
    
//     },
//     {
//       videoUrl:"https://www.youtube.com/watch?v=oTbrKdyvVeY",
//       logoUrl:"../../assets/whychimg2.webp",
//       videoTitle:"DesignRise",
//       classno:"class-6",
      
//     },
//     {
//       videoUrl:"https://www.youtube.com/watch?v=73JkxmZLHUA",
//       logoUrl:"../../assets/whychimg2.webp",
//       videoTitle:"ThreadWay",
//       classno:"class-7",
      
//     },
//     {
//       videoUrl:"https://www.youtube.com/watch?v=bvxiJ5fZe3A",
//       logoUrl:"../../assets/whychimg2.webp",
//       videoTitle:"DesignRise",
//       classno:"class-8",
    
//     }
//   ]
  
  sanitizeUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

private extractVideoId(url: string): string | null {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*v=([^&\s]+)|youtu\.be\/([^&\s]+)/;
  const match = url.match(regex);
  return match ? match[1] || match[2] : null;
}

items:any;
itemDetail(item:any){

  this.items = item;

}






}
