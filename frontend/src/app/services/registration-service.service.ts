import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { UserCompanyDTO } from '../classes/user-company-dto';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http : HttpClient) { }

  public register(dto : UserCompanyDTO):Observable<any>
  {
    console.log(dto)
    return this.http.post<UserCompanyDTO[]>("http://localhost:8082/api/user/signup",dto);
  }

  public addDebtor(addNewDebtor : Object):Observable<any>
  {
    console.log(addNewDebtor)
    return this.http.post<any[]>("http://localhost:8082/api/debtors/add",addNewDebtor);
  }
}

