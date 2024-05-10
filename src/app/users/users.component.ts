import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  constructor(private usersService : UsersService) { }

  ngOnInit() {
    this.showUsers()
  }

  showUsers() {
    this.usersService.getUsers().subscribe((data) => {
      console.log(data)
    })
  }
}
