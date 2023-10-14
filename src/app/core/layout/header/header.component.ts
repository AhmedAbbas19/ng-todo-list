import { TranslationService } from './../../services/translate.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(public translate: TranslationService) { }
}
