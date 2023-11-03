import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { LANGS_DIRECTION } from '../constants/languages.constants';

@Injectable({ providedIn: 'root' })
export class DirectionService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService
  ) {}

  startDirectionListener() {
    this.translate.onLangChange.subscribe(({ lang }) => {
      const dir  = LANGS_DIRECTION[lang as keyof typeof LANGS_DIRECTION];
      this.directionChanged(dir);
      this.changeCssFile(dir);
    });
  }

  private directionChanged(dir: string): void {
    const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = dir;
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
