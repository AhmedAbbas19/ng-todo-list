import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-field',
    template: `
        <div class="form-group">
            <input class="form-group__input" type="text" [name]="name" [placeholder]="placeholder"/>
            <i class="form-group__postfix fas fa-add"></i>
        </div>
    `
})
export class InputFieldComponent implements OnInit {
    @Input() name: string;
    @Input() placeholder: string;

    constructor() { }

    ngOnInit(): void { }
}
