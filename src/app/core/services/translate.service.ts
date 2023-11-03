import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DEFAULT_LANG, LANGUAGES, STORAGE_LANG_KEY } from '../constants/languages.constants';

@Injectable({
  providedIn: 'root'
})
export class TranslationService extends TranslateService {
  private langSubject = new BehaviorSubject(this.getStoredLanguage());

  get lang$() {
    return this.langSubject;
  }

  setLang(lang: string) {
    this.langSubject.next(lang);
  }

  constructor(private translate: TranslateService) {
    const { store, currentLoader, compiler, parser, missingTranslationHandler, defaultLang } = translate;
    super(store, currentLoader, compiler, parser, missingTranslationHandler, true, false, false, defaultLang);
  }

  init() {
    this.addLangs(LANGUAGES);
    this.use(this.getStoredLanguage());
  }

  override use(lang: string): Observable<any> {
    localStorage.setItem(STORAGE_LANG_KEY, lang);
    this.setLang(lang);
    return this.translate.use(lang);
  }

  private getStoredLanguage(): string {
    const storedLanguage = localStorage.getItem(STORAGE_LANG_KEY) || DEFAULT_LANG;
    return this.getLangs().some(l => storedLanguage === l) ? storedLanguage : DEFAULT_LANG;
  }
}
