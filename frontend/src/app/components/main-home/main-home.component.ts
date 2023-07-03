import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent {
  opened = false;
  one = false;
  two = false;
  three = false;
  four = false;

  constructor(private router: Router, private authServ: AuthService){}

  dummyComponent1 = HomeComponent;
  dummyComponent2 : any;
  dummyComponent3 : any;
  dummyComponent4 : any;

  ngOnInit(): void {
    if(!this.authServ.isloggedIn()){
      this.router.navigate(['/login']);
    }
  }

  assignComponent(str:string){
    if(str === '1'){
      this.router.navigate(['/home']);  
    }else if(str === '2'){
      this.one = false;
      this.three = false;
      this.four = false;
      this.two = true;
    }else if(str === '3'){
      this.one = false;
      this.two = false;
      this.four = false;
      this.three = true;
    }else if(str === '4'){
      this.one = false;
      this.two = false;
      this.three = false;
      this.four = true;
    }
  }

  logout() {   
    localStorage.removeItem('isloggedIn');    
    localStorage.removeItem('token');  
    this.router.navigate(['/login']);  
  } 

}
