import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() { }
  logout(): void {
    this.userService.logout(
      (response: any) => {
        console.log(response);
          this.router.navigate(['/login']);
      }
    );
  }
}
