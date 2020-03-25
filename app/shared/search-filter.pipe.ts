import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform{
    transform(items: any[], args: string): any[] {
        let searchFilter: string = args ? args.toLocaleLowerCase() : null;
        return searchFilter ? items.filter(item => 
            item.name.toLocaleLowerCase().startsWith(searchFilter) != false) : items;
    }
}
