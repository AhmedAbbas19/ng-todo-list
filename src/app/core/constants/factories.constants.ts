import { TranslationService } from 'src/app/core/services/translate.service';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DirectionService } from '../services/direction.service';

export const InitTranslationFactory = (TranslationService: TranslationService) => {
  return () => TranslationService.init();
};

export const InitDirectionFactory = (directionService: DirectionService) => {
  return () => directionService.startDirectionListener();
};

const HttpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

export const TRANSLATE_CONFIG: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  },
  isolate: true
};
