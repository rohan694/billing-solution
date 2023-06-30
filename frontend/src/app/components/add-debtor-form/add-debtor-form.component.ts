import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Debtors } from 'src/app/classes/debtors';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationServiceService } from 'src/app/services/registration-service.service';
import { SendBillInfoService } from 'src/app/services/send-bill-info.service';

@Component({
  selector: 'app-add-debtor-form',
  templateUrl: './add-debtor-form.component.html',
  styleUrls: ['./add-debtor-form.component.css']
})
export class AddDebtorFormComponent implements OnInit{
  form!: FormGroup;
  submitted = false;
  customers!: Debtors[]; 
  id = {'userId':JSON.parse(localStorage.getItem('token') || '{}')};
  uId = localStorage.getItem('token');
  session = JSON.parse(localStorage.getItem('token') || '{}');

  constructor(
    private service: RegistrationServiceService, 
    private router: Router,
    private formBuilder: FormBuilder,
    private sbiServ: SendBillInfoService, private logservice: LoginService, private authServ: AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        
      name:[, Validators.required],
      mobile:[, [Validators.required,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      companyId:[, Validators.required],
      gstin:[,Validators.required],
      companyPan: [, Validators.required]
    });

    if(!this.authServ.isloggedIn()){
      this.router.navigate(['/login']);
    }else{
          this.sbiServ.getAllCompanies({'userId':this.id,'session':this.session}).subscribe((response) => {
            this.customers = response;
            console.log(response);
            }, (error) => {
              alert("Error fetching records!");
              console.log(error);
            }
            );
      }
  }

  get registerFormControl() {
    return this.form.controls;
  }

  addDebtor(){
    this.submitted = true;

      if (this.form.valid) {
        this.service.addDebtor(this.form.value).subscribe((response:any) => {
          alert("Registration Success!");
          this.router.navigate(['/home']);
          console.log(response);
          },  (error) => {
            alert(error.error);
          }
        );
      }

  }

  logout() {   
    localStorage.removeItem('isloggedIn');    
    localStorage.removeItem('token');  
    this.router.navigate(['/login']);  
  } 
}
