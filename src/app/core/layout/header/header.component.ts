import { DirectionService } from './../../services/direction.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(public directionService: DirectionService) { }
}
