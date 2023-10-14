import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { LANGS_DIRECTION } from '../constants/languages.constants';

@Injectable({providedIn: 'root'})
export class DirectionService {
  document = inject(DOCUMENT);

  constructor(private translate: TranslateService) {}

  initializeDirection() {
    this.translate.onLangChange.subscribe(({lang}: {lang: 'en' | 'ar'}) => {
      this.directionChanged(LANGS_DIRECTION[lang]);
    })
  }

  private directionChanged(dir: string): void {
    const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = dir === 'rtl' ? 'rtl' : 'ltr';
    this.changeCssFile(dir);
  }

  private changeCssFile(dir: string): void {
    const headElement = this.document.getElementsByTagName('head')[0] as HTMLHeadElement;
    const titleElement = this.document.getElementsByTagName('title')[0] as HTMLHeadElement;
    const stylesheetElement = this.document.getElementById('directed-stylesheet') as HTMLLinkElement;
    const stylesheetPath = dir === 'rtl' ? 'main-rtl.css' : 'main-ltr.css';
    titleElement.innerHTML = this.translate.instant('title');

    if (stylesheetElement) {
      stylesheetElement.href = stylesheetPath;
    } else {
      const newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.id = 'directed-stylesheet';
      newLink.href = stylesheetPath;
      headElement.appendChild(newLink);
    }
  }

}