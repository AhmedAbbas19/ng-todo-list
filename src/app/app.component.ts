import { DirectionService } from './core/services/direction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private directionService: DirectionService){}

  ngOnInit(): void {
    this.directionService.init();
  }
}
