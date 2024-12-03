import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-why-choose',
  templateUrl: './why-choose.component.html',
  styleUrl: './why-choose.component.scss'
})
export class WhyChooseComponent {
  ngOnInit(): void {
    AOS.init({
      offset: 120,
      delay: 0,        
      duration: 400,     
      easing: 'ease-in-out', 
      once: true,       
      mirror: false      
    });

  }}

  