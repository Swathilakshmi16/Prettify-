import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-all-course',
  templateUrl: './our-all-course.component.html',
  styleUrl: './our-all-course.component.scss'
})
export class OurAllCourseComponent {
  courses=[
    {
      imageUrl:"../../assets/howitworkimg1.jpg",
      courseName:"Aari Work",
      describtion:"Learn traditional embroidery techniques with intricate designs using an Aari needle."
    },
    {
      imageUrl:"../../assets/howitworkimg1.jpg",
      courseName:"Aari Work",
      describtion:"Learn traditional embroidery techniques with intricate designs using an Aari needle."
    },
    {
      imageUrl:"../../assets/howitworkimg1.jpg",
      courseName:"Aari Work",
      describtion:"Learn traditional embroidery techniques with intricate designs using an Aari needle."
    },
    {
      imageUrl:"../../assets/howitworkimg1.jpg",
      courseName:"Aari Work",
      describtion:"Learn traditional embroidery techniques with intricate designs using an Aari needle."
    }
  ]
}
