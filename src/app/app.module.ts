import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Components/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { AuthServiceService } from './Services/auth-service.service';
import { EditDeleteCarComponentComponent } from './Components/edit-delete-car-component/edit-delete-car-component.component';
import { MainCarComponentComponent } from './Components/main-car-component/main-car-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    MainCarComponentComponent,
    EditDeleteCarComponentComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
