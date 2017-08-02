import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { FormsModule } from '@angular/forms';
import { AnotherComponentComponent } from './another-component/another-component.component'

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    AnotherComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
