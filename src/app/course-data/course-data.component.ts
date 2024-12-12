import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrl: './course-data.component.scss'
})
export class CourseDataComponent {
[x: string]: any;

  youTube=[
    {
      videoUrl:"https://www.youtube.com/watch?v=bvxiJ5fZe3A",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"Intro-Class",
      classno:"class-1",
    },
    {
      videoUrl:"https://www.youtube.com/watch?v=NChgXc5cIbI",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"Aari Journey",
      classno:"class-2",
     
    },
    {
      videoUrl:"https://www.youtube.com/watch?v=OcvBS4nuX_A",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"StitchPath",
      classno:"class-3",
 
    },
    {
      videoUrl:"https://www.youtube.com/watch?v=T8BfsP5tZUc",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"AariSteps",
      classno:"class-4",
     
    },
    {
      videoUrl:"https://www.youtube.com/watch?v=9fnQ8VmfH4Q",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"ThreadWay",
      classno:"class-5",
    
    },
    {
      videoUrl:"https://www.youtube.com/watch?v=oTbrKdyvVeY",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"DesignRise",
      classno:"class-6",
      
    },
    {
      videoUrl:"https://www.youtube.com/watch?v=73JkxmZLHUA",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"ThreadWay",
      classno:"class-7",
      
    },
    {
      videoUrl:"https://www.youtube.com/watch?v=bvxiJ5fZe3A",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"DesignRise",
      classno:"class-8",
    
    }
  ]
  constructor(private sanitizer: DomSanitizer) { }
  sanitizeUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
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
