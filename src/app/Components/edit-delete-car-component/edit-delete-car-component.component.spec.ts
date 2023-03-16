import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteCarComponentComponent } from './edit-delete-car-component.component';

describe('EditDeleteCarComponentComponent', () => {
  let component: EditDeleteCarComponentComponent;
  let fixture: ComponentFixture<EditDeleteCarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteCarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeleteCarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
