import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCompanyDTO } from 'src/app/classes/user-company-dto';
import { RegistrationServiceService } from 'src/app/services/registration-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form!: FormGroup;
  submitted = false;
  dto = new UserCompanyDTO();

  constructor(
    private service: RegistrationServiceService, 
    private router: Router,
    private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        
        name:[, Validators.required],
        mobile:[, [Validators.required,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        password: [, Validators.required],
        companyName:[, Validators.required],
        gstin:[,Validators.required],
        companyPan: [, Validators.required],
        cnf_pwd: [, Validators.required]
      });
    }

    get registerFormControl() {
      return this.form.controls;
    }

    register(){
      this.submitted = true;

      if (this.form.valid) { 
        this.dto = this.form.value;
        this.service.register(this.dto).subscribe((response:any) => {
          alert("Registration Success!");
          this.router.navigate(['/login']);
          console.log(response);
          },  (error) => {
            alert(error.error);
          }
        );
      }
    }

}
