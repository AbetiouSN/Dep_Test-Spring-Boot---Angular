import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    NavbarComponent,
    // Import HttpClientModule here
  ],
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signupForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.http.post('http://localhost:8080/save', this.signupForm.value)
        .subscribe(response => {
          console.log('User saved successfully', response);
        }, error => {
          console.error('Error saving user', error);
        });
    }
  }
}
