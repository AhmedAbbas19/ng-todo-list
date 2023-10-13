import { DirectionService } from './../services/direction.service';
import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export function initializeDirectionFactory() {
  const initializeDirectionService = inject(InitializeDirectionService);
  return () => initializeDirectionService.initializeDirection();
}

@Injectable({providedIn: 'root'})
class InitializeDirectionService {
  document = inject(DOCUMENT);

  constructor(private directionService: DirectionService) {}

  initializeDirection() {
    this.directionService.direction$.subscribe((dir) => {
      this.directionChanged(dir);
    })
  }

  private directionChanged(dir: string): void {
    const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = dir === 'rtl' ? 'rtl' : 'ltr';
    this.changeCssFile(dir);
  }

  private changeCssFile(dir: string): void {
    const headTag = this.document.getElementsByTagName('head')[0] as HTMLHeadElement;
    const existingLink = this.document.getElementById('directed-stylesheet') as HTMLLinkElement;
    const bundleName = dir === 'rtl' ? 'main-rtl.css' : 'main-ltr.css';

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      const newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.id = 'directed-stylesheet';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }

}