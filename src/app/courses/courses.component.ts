import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
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
