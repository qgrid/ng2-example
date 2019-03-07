import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSelectModule, MatChipsModule, MatIconModule } from '@angular/material';

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
