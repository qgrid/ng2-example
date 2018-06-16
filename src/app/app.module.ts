import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

import { GridModule } from 'ng2-qgrid';
import { ThemeModule } from 'ng2-qgrid/theme/material';

@NgModule({
	imports: [BrowserModule, FormsModule, BrowserAnimationsModule, GridModule, ThemeModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	providers: [DataService]
})
export class AppModule { }
