import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { LoginComponent } from './login/login.component';
import { BooksentryComponent } from './booksentry/booksentry.component';
import { ViewallComponent } from './viewall/viewall.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserregisterComponent,
    LoginComponent,
    BooksentryComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
