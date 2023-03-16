import { Injectable } from '@angular/core';
import { concatWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  Login(username: string, password: string): boolean
  {
    if (username == "test" && password == "test")
    {
      localStorage.setItem("power", "igotpower");
      return true;
    }
    return false;
  }

  Logout()
  {
    localStorage.removeItem("power");
  }
}
