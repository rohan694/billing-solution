import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Debtors } from 'src/app/classes/debtors';
import { AuthService } from 'src/app/services/auth.service';
import { CreddebtService } from 'src/app/services/creddebt.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-creditors',
  templateUrl: './creditors.component.html',
  styleUrls: ['./creditors.component.css']
})
export class CreditorsComponent {

  creditorsList!: Debtors[];
  id = {'userId':JSON.parse(localStorage.getItem('token') || '{}')};
  uId = localStorage.getItem('token');
  session = JSON.parse(localStorage.getItem('token') || '{}');

  constructor(private router: Router, private credServ: CreddebtService, private service: LoginService, private authServ: AuthService) { }

  ngOnInit(): void {
    if(!this.authServ.isloggedIn()){
      this.router.navigate(['/login']);
    }else{
        this.credServ.getCreditorsList({'userId':this.id,'session':this.session}).subscribe((response) => {
        this.creditorsList = response;
          console.log(response);
          }, (error) => {
            alert("Error fetching records!");
            console.log(error);
          }
          );
    }
    
  }
}
