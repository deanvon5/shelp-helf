import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData: User = {
    userName: "none",
    pic: "none",
    email: "none"
  }

  get user(): User {
    return this.userData
  }

  // this is how components can update state
  set user(value){
    this.userData = value
  }

  constructor(private readonly http: HttpClient) { }

  getSampleUser(): void {

    // get data and set lifted state
    this.http.get<any>("https://randomuser.me/api/")
    .pipe(
     map(randomUserData => {
      let userModel:User={
        userName: randomUserData.results[0].login.username,
        pic: randomUserData.results[0].picture.medium,
        email:randomUserData.results[0].email
      }

      return userModel
     })
    )
    .subscribe({
      next:(userResult:User)=>{
        console.log("attempting to set state")
        this.userData = userResult
      }
    })


  }


}
