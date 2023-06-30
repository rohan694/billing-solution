import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/classes/login-dto';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;  
  submitted = false;
  message: string=""; 
  returnUrl: string="";  
  ldto = new LoginDTO();
  user = new User();
  error_msg: string="";
  
  constructor(  
    private service : LoginService,
    private formBuilder : FormBuilder,  
    private router : Router,  
    private authService : AuthService  
  ) { }

  ngOnInit() {  
    // const user = this.service.getlogininfo();
    this.loginForm = this.formBuilder.group({  
      userName: [, Validators.required],  
      password: [, Validators.required]  
    });   
  }  

  get loginFormControl(){
    return this.loginForm.controls;
  }

  login() {  

    this.submitted = true;
   
      if (this.loginForm.valid) {  
        this.ldto = this.loginForm.value;
        this.service.login(this.ldto).subscribe((response:any) => {
            if(response != null){
              this.error_msg = "";
              alert("Login Success");
              this.authService.login(JSON.stringify(response)).then(()=>{
                this.router.navigate(['/home']);
              }) 
              
            }else{
              this.error_msg = "Incorrect UserName or Password";
            }
        },  (error) => {
            alert(JSON.stringify(error.error));
            
        }
      );
    }  
  }

}
