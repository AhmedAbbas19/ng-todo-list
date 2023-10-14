import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(text: string, filter: string) {
    if (text && filter) {
      text = `${text}`.replace(
        new RegExp(`(${this.escapeRegExp(filter)})`, 'gi'),
        '<span class="highlighted">$1</span>'
      );
    }
    return text;
  }

  escapeRegExp(text: string) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
}
