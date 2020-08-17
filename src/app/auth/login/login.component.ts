import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.buidlForm();
  }

  ngOnInit(): void {
  }

  private buidlForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  iniciarSesion(ev: Event) {
    ev.preventDefault();
    if (this.loginForm.valid) {
      const value = this.loginForm.value;
      this.authService.createUser(value.email, value.password).then(respo => {
        console.log(respo);
      });
    }
  }

}
