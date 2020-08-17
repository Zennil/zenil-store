import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buidlForm();
  }

  ngOnInit(): void {
  }

  private buidlForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  registrar(ev: Event) {
    ev.preventDefault();
    if (this.registerForm.valid) {
      const value = this.registerForm.value;
      this.authService.createUser(value.email, value.password).then(respo => {
        // console.log(respo);
        this.router.navigate(['login']);
      });
    }
  }

}
