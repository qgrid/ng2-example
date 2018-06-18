import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSelectModule, MatChipsModule } from '@angular/material';

import { DataService } from '../data.service';
import { AppComponent } from './app.component';

import { GridModule } from 'ng2-qgrid';
import { ThemeModule } from 'ng2-qgrid/theme/material';

@NgModule({
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	providers: [DataService],
	imports: [
		GridModule,
		ThemeModule,
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,

		MatButtonModule,
		MatSelectModule,
		MatChipsModule
	],

})
export class AppModule { }
