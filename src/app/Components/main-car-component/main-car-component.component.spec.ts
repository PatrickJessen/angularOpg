import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarComponentComponent } from './main-car-component.component';

describe('MainCarComponentComponent', () => {
  let component: MainCarComponentComponent;
  let fixture: ComponentFixture<MainCarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
