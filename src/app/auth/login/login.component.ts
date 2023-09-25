import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      username: ['',Validators.required],
      password: ['',[Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit(): void {
    const pokeball = document.querySelector("#pokeball") as HTMLElement;
    setTimeout(()=>{pokeball.classList.add('pokeball');},1000);
  }

  onLogin(): void{
    if(this.loginForm.valid){
      if(this.authService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)){
        this.router.navigate(['/main'])
      }
    }
  }

}
