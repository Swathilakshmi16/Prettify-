import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {

  constructor(
    private http:HttpClient
  ) { }
  apiKey = "AIzaSyCDoCf7LSARUjgfesnQmm6-Jo4igswmY0Q";
  sheetId = "1fI7SCo0C8Un0FOBS_0EbrvUf5orRgRt_-R8KbMkpieI";
  
  getAllCourses(): Observable<any> {
    const range = "AllCourse!A:G";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${range}?key=${this.apiKey}`
    return this.http.get(url);
  }

  getCourseDetails(courseId:any): Observable<any> {
    const range = `${courseId}!A:G`;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${range}?key=${this.apiKey}`
    return this.http.get(url);
  }
  getAllClients(): Observable<any> {
    const range = "Clients!A:C";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${range}?key=${this.apiKey}`
    return this.http.get(url);
  }
  getBasic(): Observable<any> {
    const range = "Basic!A:G";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${range}?key=${this.apiKey}`
    return this.http.get(url);
  }

}
