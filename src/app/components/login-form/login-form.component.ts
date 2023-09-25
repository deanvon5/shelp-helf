import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private readonly userService : UserService, private readonly router:Router) { }

  ngOnInit(): void {

  }

  handleSampleUser():void{
this.userService.getSampleUser()
console.log("lets go to the next page")
this.router.navigate(["/shelf"])
  }

}
