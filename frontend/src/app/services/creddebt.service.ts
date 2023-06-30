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
    return this.http.post<Debtors[]>("http://localhost:8082/api/debtors/",param);
  }

  getCreditorsList(param:Object):Observable<Debtors[]> {
    return this.http.post<Debtors[]>("http://localhost:8082/api/creditors/",param);
  }
}
