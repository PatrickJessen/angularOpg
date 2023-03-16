import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarData } from 'src/app/Interfaces/car-data';
import { RestApiServiceService } from 'src/app/Services/rest-api-service.service';

@Component({
  selector: 'app-edit-delete-car-component',
  templateUrl: './edit-delete-car-component.component.html',
  styleUrls: ['./edit-delete-car-component.component.css']
})
export class EditDeleteCarComponentComponent implements OnInit {
  car: CarData | undefined;
  editCarForm: FormGroup;
  constructor(private service: RestApiServiceService, private route: ActivatedRoute, private router: Router) 
  {
    this.editCarForm = new FormGroup({
      rank: new FormControl(this.car?.rank,[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
      model: new FormControl('',[Validators.required, Validators.minLength(4)]),
      quantity: new FormControl('',[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
      changeQuantityPercent: new FormControl('',[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")])
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('model');
    this.service.GetCar(id!).subscribe(car => this.car = car)
  }

  EditCar()
  {
    this.service.EditCar(this.editCarForm.get('rank')!.value,this.editCarForm.get('model')!.value,this.editCarForm.get('quantity')!.value,this.editCarForm.get('changeQuantityPercent')!.value)
    .subscribe(s => console.log(s));
    this.router.navigate(["cars"]);
  }
  DeleteCar()
  {
    this.service.DeleteCar(this.car!.model!).subscribe(text => console.log(text));
    this.router.navigate(['cars']);
  }
}
