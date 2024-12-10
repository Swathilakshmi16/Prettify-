import { Component } from '@angular/core';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrl: './course-data.component.scss'
})
export class CourseDataComponent {
  youTube=[
    {
      videoUrl:"https://www.youtube.com/embed/daF9R6dadH8",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"Intro-Class",
      channelName:"Prettify",
      views:"1M views • 87 days ago"
    },
    {
      videoUrl:"../../assets/video.mp4",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"Aari Journey",
      channelName:"Prettify",
      views:"6M views • 58 days ago"
    },
    {
      videoUrl:"../../assets/video.mp4",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"StitchPath",
      channelName:"Prettify",
      views:"5M views • 25 days ago"
    },{
      videoUrl:"../../assets/video.mp4",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"AariSteps",
      channelName:"Prettify",
      views:"3M views • 8 days ago"
    },
    {
      videoUrl:"../../assets/video.mp4",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"ThreadWay",
      channelName:"Prettify",
      views:"4M views • 4 days ago"
    },
    {
      videoUrl:"https://www.youtube.com/embed/daF9R6dadH8",
      logoUrl:"../../assets/whychimg2.webp",
      videoTitle:"DesignRise",
      channelName:"Prettify",
      views:"7M views • 1 days ago"
    }
  ]

}
