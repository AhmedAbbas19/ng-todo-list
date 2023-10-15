import { Component, OnInit } from '@angular/core';
import { TranslationService } from './core/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslationService){}

  ngOnInit(): void {
    this.translate.init();
  }
}
