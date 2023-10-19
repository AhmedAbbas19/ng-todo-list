import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { TRANSLATE_CONFIG, InitDirectionFactory } from './core/constants/factories.constants';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TranslateModule.forRoot(TRANSLATE_CONFIG), CoreModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: InitDirectionFactory,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
