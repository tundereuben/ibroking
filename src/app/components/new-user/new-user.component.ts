import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  // onSubmit() {
  //   this.authService.newUser(this.email, this.password)
  //     .then(res => {
  //       this.flashMessage.show('You have created a new user', {
  //         cssClass: 'alert-success', timeout: 4000
  //       });
  //       this.router.navigate(['/']);
  //     })
  //     .catch(err => {
  //       this.flashMessage.show(err.message, {
  //         cssClass: 'alert-danger', timeout: 4000
  //       });
  //     });
  // }

  onSubmit() {
    this.authService.newUser(this.email, this.password);
    this.flashMessage.show('New user created successfully', {
      cssClass: 'alert-success', timeout: 4000
    });
    this.router.navigate(['/'])
  }

}
