import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(token:string): Promise<any>{
    return new Promise((resolve) => {
      localStorage.setItem('isloggedIn','true');
      localStorage.setItem('token',token);
      resolve(true);
    })
  }
  isloggedIn():boolean{
    return !!localStorage.getItem('isloggedIn');
  }

  constructor() { }
}
