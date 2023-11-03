import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { TRANSLATE_CONFIG, InitDirectionFactory, InitTranslationFactory } from './core/constants/factories.constants';
import { DirectionService } from './core/services/direction.service';
import { TranslationService } from './core/services/translate.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TranslateModule.forRoot(TRANSLATE_CONFIG), CoreModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: InitDirectionFactory,
      deps: [DirectionService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: InitTranslationFactory,
      deps: [TranslationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
