import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'listFilter'})
export class ListFilterPipe implements PipeTransform {
    transform(list: any[], key: string, value: string): any {
        if (!list || !key || !value) {
            return list;
        }
        return list.filter(item => item[key].toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
}