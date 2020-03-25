import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule} from './products/products.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './register-login//login/login.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductsService } from './products/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register-login/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegloginService } from './register-login/reglogin.service';
import {ProfileComponent} from './register-login/profile/profile.component'

@NgModule({

  imports: [BrowserModule,NgbModule,ReactiveFormsModule,
    ProductsModule,
    AppRoutingModule,
    BrowserAnimationsModule],

  declarations: [ 
    AppComponent,
    AboutComponent,
    ProfileComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent
  ],

    providers:[ProductsService, RegloginService],

  
  bootstrap: [AppComponent]
})
export class AppModule { }
