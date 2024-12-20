import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {

  email: string = '';
  contactNo: string = '';
  courseName: string = '';

  openWhatsAppChat() {
    const phoneNumber = '916374884833'; 
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

}
