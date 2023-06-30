import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http : HttpClient) { }
  public getDashDetails(param: Object){
    return this.http.post<any>("https://backend-q4gk.onrender.com/api/dashboard/getData", param);
  }
}
