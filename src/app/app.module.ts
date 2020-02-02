import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

FontAwesomeModule
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
