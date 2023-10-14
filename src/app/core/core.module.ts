import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';

const components = [HeaderComponent];

@NgModule({
    declarations: [...components],
    imports: [ CommonModule, HttpClientModule ],
    exports: [...components]
})
export class CoreModule {}