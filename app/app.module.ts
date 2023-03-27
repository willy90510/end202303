import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'; 

import { AppComponent } from './app.component';
import { MagicComponent } from './magic.component';
import { BrowserAnimationsModule } from 
'@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, FormsModule,MatTabsModule,
    BrowserAnimationsModule],
  declarations: [AppComponent, MagicComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
