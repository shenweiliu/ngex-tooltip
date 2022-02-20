import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showHeader: boolean = false;
    buttonLabel: string = 'Show Header';

    toggleHeader() {
        this.showHeader = !this.showHeader;
        if (this.buttonLabel == 'Hide Header') {
            this.buttonLabel = 'Show Header';
        }
        else {
            this.buttonLabel = 'Hide Header';
        }
    }

}



