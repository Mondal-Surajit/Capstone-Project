import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ProductsModule} from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './register-login//login/login.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register-login/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegloginService } from './register-login/reglogin.service';
import {ProfileComponent} from './register-login/profile/profile.component'
import { HttpClientModule } from '@angular/common/http';
import {AppGaurdService} from './app-gaurd.service'
@NgModule({

  imports: [BrowserModule,ReactiveFormsModule,
    //ProductsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule],

  declarations: [ 
    AppComponent,
    AboutComponent,
    ProfileComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent
  ],

    providers:[ RegloginService,AppGaurdService],

  
  bootstrap: [AppComponent]
})
export class AppModule { }
