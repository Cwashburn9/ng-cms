import { Component, OnInit } from '@angular/core';

// import { UserService } from '../services/user.service';

// 1. Import the User object (model)
import { User } from '../models/user';
import { url } from 'inspector';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: any;
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() { }
  login(): void {
    this.userService.login(this.user).subscribe(
      (response: any) => {
        console.log(response);
        if (response.success == false) {
          this.error = true;
        }
        else
          this.router.navigate(['/articles']);
      }
    );
  }
}
