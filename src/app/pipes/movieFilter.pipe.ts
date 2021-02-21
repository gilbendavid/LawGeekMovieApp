import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'movieFilter',
    pure: false
})
export class MovieFilterPipe implements PipeTransform {
    transform(items: any[], filter: any[]): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => !filter.includes(item.key));
    }
}