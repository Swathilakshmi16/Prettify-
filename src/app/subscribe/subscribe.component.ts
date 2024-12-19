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
      const phoneNumber = '9943978066';
      const message = `Hello, I am interested in the course. \nEmail: ${this.email} \nContact No: ${this.contactNo} \nCourse Name: ${this.courseName}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
  }

}
