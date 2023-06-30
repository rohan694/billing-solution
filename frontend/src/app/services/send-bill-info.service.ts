import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Debtors } from '../classes/debtors';

@Injectable({
  providedIn: 'root'
})
export class SendBillInfoService {

  constructor(private http : HttpClient) { }
  
  public getAllCompanies(param: Object){
    return this.http.post<any[]>("https://backend-q4gk.onrender.com/api/companies", param);
  }

  public getCompanyByPan(paramWithPan: Object){
    return this.http.post<any>("https://backend-q4gk.onrender.com/api/companies/search", paramWithPan);
  }

  public getAllDebtors(param: Object){
    return this.http.post<Debtors[]>("https://backend-q4gk.onrender.com/api/debtors/", param);
  }

  public sendBillInfo(dto : Object):Observable<any>
  {
    console.log(dto)
    return this.http.post<any[]>("https://backend-q4gk.onrender.com/api/transactions/create",dto);
  }
}
