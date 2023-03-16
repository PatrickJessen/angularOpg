import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarData } from 'src/app/Interfaces/car-data';
import { CarServiceService } from 'src/app/Services/car-service.service';
import { RestApiServiceService } from 'src/app/Services/rest-api-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  addCarForm: FormGroup;
  constructor(private carService: RestApiServiceService, private location: Location) 
  { 
    this.addCarForm = new FormGroup({
      rank: new FormControl('',[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
      model: new FormControl('',[Validators.required, Validators.minLength(4)]),
      quantity: new FormControl('',[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
      changeQuantityPercent: new FormControl('',[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")])
    });
  }

  ngOnInit(): void {
  }

  AddCar()
  {
    this.carService.AddCar(this.addCarForm.get('rank')!.value,this.addCarForm.get('model')!.value,this.addCarForm.get('quantity')!.value,this.addCarForm.get('changeQuantityPercent')!.value)
    .subscribe(s => console.log(s));
    this.location.back();
  }
}
