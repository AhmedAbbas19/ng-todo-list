import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModuleConfig } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { DirectionService } from "../services/direction.service";

export const InitDirectionFactory = () => {
    const directionService = inject(DirectionService);
    return () => directionService.initDirection();
}


const HttpLoaderFactory = (http: HttpClient) => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const TRANSLATE_CONFIG: TranslateModuleConfig = {
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
}