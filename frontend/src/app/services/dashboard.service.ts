import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http : HttpClient) { }
  public getDashDetails(param: Object){
    return this.http.post<any>("http://localhost:8082/api/dashboard/getData", param);
  }
}
