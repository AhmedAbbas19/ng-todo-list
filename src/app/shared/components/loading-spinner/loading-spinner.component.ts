import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loading-spinner',
    template: `
        <div class="loading-spinner">
            <img src="assets/images/gif/loading-spinner.gif" alt="loading..." width="100">
        </div>
    `,
})
export class LoadingSpinnerComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
