import { Component } from '@angular/core';
import {User} from "../Models/User";
import {UserService} from "../services/user.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    NavbarComponent,
  ],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}
