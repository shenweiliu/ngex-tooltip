import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    showHeader: boolean = false;
    buttonLabel: string = 'Show Header';
    headerOffsetStatus: string = '0';
    headerOffsetValue: number = 0;

    ngOnInit() {
        this.headerOffsetStatus = '1';
    }

    toggleHeader() {
        this.showHeader = !this.showHeader;
        if (this.buttonLabel == 'Hide Header') {
            this.buttonLabel = 'Show Header';

            //Reset header height.
            this.headerOffsetValue = 0;
        }
        else {
            this.buttonLabel = 'Hide Header';

            this.headerOffsetChanged(this.headerOffsetStatus);
        }
    }

    headerOffsetChanged(value: string) {
        if (value == '1') {
            this.headerOffsetStatus == '1';
            this.headerOffsetValue = 0;
        }
        else if (value == '2') {
            this.headerOffsetStatus == '2';

            //Header height value is fixed to 60px.
            this.headerOffsetValue = 60;
        }
    }
}



