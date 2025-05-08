import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleSheetsService } from '../services/googlesheets.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent implements OnInit {

  email: string = '';
  contactNo: string = '';
  courseName: string = '';
  constructor(
    private googleSheetsService: GoogleSheetsService,){
  }
ngOnInit(): void {
  this.getAllCourses();
}
  openWhatsAppChat() {
    const phoneNumber = '919790389637'; 
    const message = `
      Hello, I am interested in the course.
      Email: ${this.email}
      Contact No: ${this.contactNo}
      Course Name: ${this.courseName}
    `;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    if (this.email && this.contactNo && this.courseName) {
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Please fill in all fields before submitting.');
    }
  }

  allcoursename: string[] = [];
  getAllCourses(): void {
    this.googleSheetsService.getAllCourses().subscribe(
      (response: any) => {
        console.log('Response:', response);
  
        if (response.values && response.values.length > 1) {
          this.allcoursename = response.values.slice(1).map((row: any) => row[1]); // Assuming courseName is in the second column
        }
  
        console.log('All Course Names:', this.allcoursename);
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
