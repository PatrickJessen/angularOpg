import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarData } from 'src/app/Interfaces/car-data';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { RestApiServiceService } from 'src/app/Services/rest-api-service.service';

@Component({
  selector: 'app-main-car-component',
  templateUrl: './main-car-component.component.html',
  styleUrls: ['./main-car-component.component.css']
})
export class MainCarComponentComponent implements OnInit {
  cars: CarData[] | undefined;
  constructor(private service: RestApiServiceService, private auth: AuthServiceService, private router: Router) { }

  ngOnInit()
  {
    //Fetch all cars
    this.service.GetAllCars().subscribe(carsapi => this.cars = carsapi);
  }
  EditCar(car: CarData)
  {
    //Routes to car/:model
    this.router.navigate(['car/', car.model])
  }
  Logout()
  {
    this.auth.Logout();
    this.router.navigate(['login']);
  }
  AddCar()
  {
    this.router.navigate(["addcar"]);
  }
}
