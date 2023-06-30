import { Injectable } from '@angular/core';
import { LoginDTO } from '../classes/login-dto';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  getlogininfo() {
    return this.http.get<User>("http://localhost:8082/api/user/getLoginInfo");
  }
  login(ldto: LoginDTO) {
    return this.http.post<any>("http://localhost:8082/api/user/login",ldto);
  }
}
