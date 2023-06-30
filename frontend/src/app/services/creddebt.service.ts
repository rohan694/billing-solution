import { Injectable } from '@angular/core';
import { Debtors } from '../classes/debtors';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreddebtService {
  constructor(private http : HttpClient) { }
  getDebtorsList(param:Object):Observable<Debtors[]> {
    return this.http.post<Debtors[]>("https://backend-q4gk.onrender.com/api/debtors/",param);
  }

  getCreditorsList(param:Object):Observable<Debtors[]> {
    return this.http.post<Debtors[]>("https://backend-q4gk.onrender.com/api/creditors/",param);
  }
}
