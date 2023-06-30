import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  id = {'userId':JSON.parse(localStorage.getItem('token') || '{}')};
  uId = localStorage.getItem('token');
  session = JSON.parse(localStorage.getItem('token') || '{}');
  dAmt: any;
  cAmt: any;

  constructor(private router: Router, private authServ: AuthService, private dServ: DashboardService) { }

  ngOnInit(): void {
    if(!this.authServ.isloggedIn()){
      this.router.navigate(['/login']);
    }else{
      this.dServ.getDashDetails({'userId':this.id,'session':this.session}).subscribe((response) => {
          this.cAmt = response.creditorOverdueAmount;
          this.dAmt = response.debtorOverdueAmount;
          console.log(response);
          }, (error) => {
            alert("Error fetching records!");
            console.log(error);
          }
          );
    }

  }
}
