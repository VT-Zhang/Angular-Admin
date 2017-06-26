import {Component, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  moduleId: module.id,
})
export class Login implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  // public form:FormGroup;
  // public email;
  // public password;
  // public submitted:boolean = false;

  // constructor(fb:FormBuilder,
  //             private router: Router,
  //             private authenticationService: AuthenticationService) {
  //   this.form = fb.group({
  //     'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
  //     'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
  //   });

  //   this.email = this.form.controls['email'];
  //   this.password = this.form.controls['password'];
  // }


  // public onSubmit(values:Object):void {
  //   this.loading = true;
  //   if (this.form.valid) {
  //       this.authenticationService.login(this.email, this.password)
  //           .subscribe(result => {
  //               if (result === true) {
  //                   this.router.navigate(['/']);
  //               } else {
  //                   this.error = 'Username or password is incorrect';
  //                   this.loading = false;
  //               }
  //           });
  //   }
  // }

  constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

  ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

   login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/pages/new']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
