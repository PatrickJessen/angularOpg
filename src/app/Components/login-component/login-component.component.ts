import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor(private authService: AuthServiceService, private router: Router) 
  { 
    if (localStorage.getItem("power") != null)
    {
      this.router.navigate(['cars']);
    }
  }

  ngOnInit(): void {
  }

  Login()
  {
    if(this.username != '' && this.password != '')
    {
      if(this.authService.Login(this.username, this.password))
      {
        console.log("test");
        this.router.navigate(['cars']);
      }
    }
  }

}
