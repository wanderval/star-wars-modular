import { Component, OnInit } from '@angular/core';

import { Character } from './character';
import { CharacterService } from './character.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  providers: [ CharacterService ]
})
export class CharacterComponent implements OnInit {
  characters: any[];
  title: string;
  apiName: string;
  rota: string;

  constructor(private characterService: CharacterService) {
    this.title = 'Character';
    this.apiName = 'people';
    this.rota = 'character';
  }

  ngOnInit() {
    this.characterService.getCharacters()
    .subscribe( (characters: Character[]) => {
      this.characters = characters;
    });
  }

}
