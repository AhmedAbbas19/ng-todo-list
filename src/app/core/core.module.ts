import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

const components = [HeaderComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, HttpClientModule, TranslateModule],
  exports: [...components]
})
export class CoreModule {}
