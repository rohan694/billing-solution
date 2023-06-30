import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Debtors } from 'src/app/classes/debtors';
import { AuthService } from 'src/app/services/auth.service';
import { CreddebtService } from 'src/app/services/creddebt.service';
import { LoginService } from 'src/app/services/login.service';
import { SendBillInfoService } from 'src/app/services/send-bill-info.service';

interface Customer {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-send-bill-info',
  templateUrl: './send-bill-info.component.html',
  styleUrls: ['./send-bill-info.component.css']
})

export class SendBillInfoComponent {
  customers!: Debtors[];
  form!: FormGroup;
  submitted = false;
  id = {'userId':JSON.parse(localStorage.getItem('token') || '{}')};
  uId = localStorage.getItem('token');
  session = JSON.parse(localStorage.getItem('token') || '{}');
 
  constructor(private router: Router, private sbiServ: SendBillInfoService, 
                private service: LoginService, private formBuilder: FormBuilder,
                private authServ: AuthService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      debtorId:[, Validators.required],
      billDate:[, Validators.required],
      billDescription: [, Validators.required],
      billNumber:[, Validators.required],
      creditAmount:[,Validators.required],
      interestRate: [, Validators.required],
      creditLimitDays: [, Validators.required],
      Remark: [, Validators.required]
    });

   
    if(!this.authServ.isloggedIn()){
      this.router.navigate(['/login']);
    }else{
          this.sbiServ.getAllDebtors({'userId':this.id,'session':this.session}).subscribe((response) => {
            this.customers = response;
            console.log(response);
            }, (error) => {
              alert("Error fetching records!");
              console.log(error);
            }
            );
      }

  }

  sendbillinfo(){
    this.submitted = true;

      if (this.form.valid) {
        this.sbiServ.sendBillInfo(this.form.value).subscribe((response:any) => {
          alert("Sent Bill Info!");
          this.router.navigate(['/home']);
          console.log(response);
          },  (error) => {
            alert(error.error);
          }
        );
      }
    
  }

}
