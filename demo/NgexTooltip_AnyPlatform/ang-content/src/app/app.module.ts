import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgexTooltipModule } from 'ngex-tooltip';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgexTooltipModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
