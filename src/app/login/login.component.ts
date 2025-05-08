import { Component } from '@angular/core';
import { GoogleSheetsService } from '../services/googlesheets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  courseList: any;
  constructor(
    private googleSheetsService: GoogleSheetsService,
    private router : Router,
  ) {}
  userId:any;
  password:any;
  users:any;
  
  login(){
    if(this.userId && this.password){
      window.localStorage.setItem('userId', this.userId);
    window.localStorage.setItem('password', this.password);
      this.getAllClients(this.userId , this.password)
    }
    else{
      alert("please enter valid the userName and password");
    }
  }

  getAllClients(userId:any , password:any): void {
    this.googleSheetsService.getAllClients().subscribe(
      (response: any) => {
        const sheetData = response.values;
        if (sheetData.length > 0) {
          const headers = sheetData[0];
          const colIndex = (colName: string) => headers.indexOf(colName);
          const data = sheetData.slice(1).map((course: any) => ({
            userId: course[colIndex('userId')],
            password: course[colIndex('password')],
            courseList: course[colIndex('courseList')],
            
          }));
          const storedUserId = window.localStorage.getItem('userId');
          const storedPassword = window.localStorage.getItem('password');
  
          this.courseList = data.find(
            (c: any) => c.userId === storedUserId && c.password === storedPassword
          );
  
          if(this.courseList){
             window.localStorage.setItem("courses",  JSON.stringify(this.courseList ? this.courseList.courseList : ''))
             this.router.navigate(['/courses']);
          }
          else{
            alert("userName and password are incorrect");
          }
        }
      },
      (error: any) =>{
        alert("userName and password are incorrect");
        console.error('Error fetching courses:', error)
      }
    );
  }


}
