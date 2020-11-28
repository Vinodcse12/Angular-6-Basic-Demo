import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: {id: number, name: string, adress: string, email: string}[] = [
    { id: 1, name: 'user-1', adress: 'ad-1', email: 'user1@gmail.com' },
    { id: 2, name: 'user-2', adress: 'ad-2', email: 'user2@gmail.com' },
    { id: 3, name: 'user-3', adress: 'ad-3', email: 'user3@gmail.com' }
  ];
  constructor(private route: Router) { }

  ngOnInit() {
  }

  setuser(user: any) {
    let id = user.id;
    let name = user.name;
    this.route.navigate(['users', id, name]);
  }

}
