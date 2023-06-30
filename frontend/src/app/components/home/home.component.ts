import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CompanySearchComponent } from '../company-search/company-search.component';
import { CreditorsComponent } from '../creditors/creditors.component';
import { DebtorsComponent } from '../debtors/debtors.component';
import { SendBillInfoComponent } from '../send-bill-info/send-bill-info.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  opened = false;
  one = false;
  two = false;
  three = false;
  four = false;
  five = false;

  constructor(private router: Router, private authServ: AuthService){}

  dummyComponent1 = DashboardComponent;
  dummyComponent2 = CompanySearchComponent;
  dummyComponent3 = CreditorsComponent;
  dummyComponent4 = DebtorsComponent;
  dummyComponent5 = SendBillInfoComponent;

  ngOnInit(): void {
    if(!this.authServ.isloggedIn()){
      this.router.navigate(['/login']);
    }
  }

  assignComponent(str:string){
    if(str === '1'){
      this.one = true;
      this.two = false;
      this.three = false;
      this.four = false;
      this.five = false;
    }else if(str === '2'){
      this.one = false;
      this.three = false;
      this.four = false;
      this.two = true;
      this.five = false;
    }else if(str === '3'){
      this.one = false;
      this.two = false;
      this.four = false;
      this.three = true;
      this.five = false;
    }else if(str === '4'){
      this.one = false;
      this.two = false;
      this.three = false;
      this.four = true;
      this.five = false;
    }else if(str === '5'){
      this.one = false;
      this.two = false;
      this.three = false;
      this.four = false;
      this.five = true;
    }
  }

  logout() {   
    localStorage.removeItem('isloggedIn');    
    localStorage.removeItem('token');  
    this.router.navigate(['/login']);  
  } 
}
