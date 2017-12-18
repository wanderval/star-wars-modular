import { Pipe, PipeTransform } from '@angular/core';
import { CharacterComponent } from './character.component';

@Pipe({
    name: 'filterByName2'
})
export class FilterByName2 implements PipeTransform {

    transform(characters: CharacterComponent[], digitado: string) {
        // console.log("PIPE: ", characters);
        return characters.filter(character => character[0].name.toLowerCase().includes(digitado.toLocaleLowerCase()));
    }
}
