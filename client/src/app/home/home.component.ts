import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;    // Parent to child communication

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  // Parent to child communication
  getUsers() {
    this.http.get('https://localhost:5003/api/users').subscribe(users => this.users = users);
  }

  // Child to parent communication
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
