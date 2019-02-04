import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxRightClickMenuModule } from 'ngx-right-click-menu';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxRightClickMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
