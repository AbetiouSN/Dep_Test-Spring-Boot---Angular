import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../Models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080'; // L'URL de votre backend Spring Boot

  constructor(private http: HttpClient) { }

  saveUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/allUsers`);
  }
}
