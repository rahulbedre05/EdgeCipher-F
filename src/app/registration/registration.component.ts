import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  passwordStrength: number = 0;
  passwordStrengthColor: string = '#E74C3C';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  checkPasswordStrength(event: Event) {
    const password = (event.target as HTMLInputElement).value;
    let strength = 0;
    
    if(password.length >= 8) strength += 25;
    if(password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 25;
    if(password.match(/\d/)) strength += 25;
    if(password.match(/[^a-zA-Z\d]/)) strength += 25;
    
    this.passwordStrength = strength;
    
    if(strength < 50) {
      this.passwordStrengthColor = '#E74C3C';
    } else if(strength < 75) {
      this.passwordStrengthColor = '#F1C40F';
    } else {
      this.passwordStrengthColor = '#2ECC71';
    }
  }

  onSubmit() {
    // Navigate to login regardless of form validity (per requested behaviour)
    console.log('create account clicked', this.registrationForm.value);
    this.router.navigate(['/login']);
  }
}
