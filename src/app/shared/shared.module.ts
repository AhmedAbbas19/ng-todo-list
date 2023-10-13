import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DateComponent } from './components/date/date.component';

@NgModule({
    declarations: [CardComponent, DateComponent],
    imports: [ CommonModule ],
    exports: [CardComponent, DateComponent],
    providers: [],
})
export class SharedModule {}
