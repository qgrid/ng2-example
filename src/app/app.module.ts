import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { GridModule, PipeModule } from 'ng2-qgrid';
import { ThemeModule } from 'ng2-qgrid/theme/material';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
  imports: [
    GridModule,
    ThemeModule,
    PipeModule,

    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
  ],
})
export class AppModule { }
