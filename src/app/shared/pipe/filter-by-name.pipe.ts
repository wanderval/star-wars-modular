import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByName'
})
export class FilterByName implements PipeTransform {

    transform(characters: any[], digitado: string) {
        return characters.filter(character => character.name.toLowerCase().includes(digitado.toLocaleLowerCase()));
    }
}
