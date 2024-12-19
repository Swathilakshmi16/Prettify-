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
  apiKey = "AIzaSyDFsJwZ3co3txpEdUXRnPLTwgOd6TOhd4E";
  sheetId = "1ynhjNH52gXjaRh3EwpWMtxTt_Sss51V6Sy12X0xUA1c";


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


}
