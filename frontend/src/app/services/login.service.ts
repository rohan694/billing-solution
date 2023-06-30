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
    return this.http.get<User>("https://backend-q4gk.onrender.com/api/user/getLoginInfo");
  }
  login(ldto: LoginDTO) {
    return this.http.post<any>("https://backend-q4gk.onrender.com/api/user/login",ldto);
  }
}
