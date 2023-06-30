import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SendBillInfoService } from 'src/app/services/send-bill-info.service';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent {
  id = {'userId':JSON.parse(localStorage.getItem('token') || '{}')};
  uId = localStorage.getItem('token');
  session = JSON.parse(localStorage.getItem('token') || '{}');
  form!: FormGroup;
  submitted = false;
  searchDetails: any;

  constructor(private router: Router, private authServ: AuthService, private formBuilder: FormBuilder, private sbiServ: SendBillInfoService) { }

  ngOnInit(): void {
    if(!this.authServ.isloggedIn()){
      this.router.navigate(['/login']);
    }
    this.form = this.formBuilder.group({
      
      companyPan: [, Validators.required],
      gstin: [, Validators.required]
    });
  }

  search(){
    this.sbiServ.getCompanyByPan({'searchDetails':this.form.value,'userId':this.id,'session':this.session}).subscribe((response) => {
      console.log(response);
      }, (error) => {
        alert("Error fetching records!");
        console.log(error);
      }
      );
  }
}
