import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgexTooltipModule } from './ngex-tooltip/ngex-tooltip.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgexTooltipModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
