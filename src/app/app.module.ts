import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { GridModule, PipeModule } from 'ng2-qgrid';
import { ThemeModule } from 'ng2-qgrid/theme/material';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
  imports: [
    GridModule,
    ThemeModule,
    PipeModule,
    HttpClientModule,
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
