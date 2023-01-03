import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { LoginComponent } from './login/login.component';
import { BooksentryComponent } from './booksentry/booksentry.component';
import { ViewallComponent } from './viewall/viewall.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { BookissueComponent } from './bookissue/bookissue.component';
import { DeleteComponent } from './delete/delete.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"register",
    component:UserregisterComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"bookentry",
    component:BooksentryComponent
  },
  {
    path:"viewall",
    component:ViewallComponent
  },
  {
    path:"search",
    component:SearchbookComponent
  },
  {
    path:"edit",
    component:EditbookComponent
  },
  {
    path:"issue",
    component:BookissueComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserregisterComponent,
    LoginComponent,
    BooksentryComponent,
    ViewallComponent,
    SearchbookComponent,
    EditbookComponent,
    BookissueComponent,
    DeleteComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
