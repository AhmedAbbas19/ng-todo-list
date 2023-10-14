import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DateComponent } from './components/date/date.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ListFilterPipe } from './pipes/filter-list.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';

const components = [
    CardComponent, DateComponent, LoadingSpinnerComponent, ListFilterPipe, HighlightPipe
];

@NgModule({
    declarations: [...components],
    imports: [ CommonModule ],
    exports: [...components],
})
export class SharedModule {}
