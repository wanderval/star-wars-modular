import { Pipe, PipeTransform } from '@angular/core';
// import { CharacterComponent } from './character.component';

@Pipe({
    name: 'filterByName'
})
export class FilterByName implements PipeTransform {

    transform(characters: any[], digitado: string) {
        return characters.filter(character => character.name.toLowerCase().includes(digitado.toLocaleLowerCase()));
    }
}
