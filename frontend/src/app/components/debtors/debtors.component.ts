import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Debtors } from 'src/app/classes/debtors';
import { AuthService } from 'src/app/services/auth.service';
import { CreddebtService } from 'src/app/services/creddebt.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-debtors',
  templateUrl: './debtors.component.html',
  styleUrls: ['./debtors.component.css']
})
export class DebtorsComponent {
  debtorsList!: Debtors[];
  id = {'userId':JSON.parse(localStorage.getItem('token') || '{}')};
  uId = localStorage.getItem('token');
  session = JSON.parse(localStorage.getItem('token') || '{}');

  constructor(private router: Router, private debtServ: CreddebtService, private service: LoginService, private authServ: AuthService) { }

  ngOnInit(): void {
      if(!this.authServ.isloggedIn()){
        this.router.navigate(['/login']);
      }else{
          this.debtServ.getDebtorsList({'userId':this.id,'session':this.session}).subscribe((response) => {
          this.debtorsList = response;
            console.log(response);
            }, (error) => {
              alert("Error fetching records!");
              console.log(error);
            }
            );
      }
  }
}
