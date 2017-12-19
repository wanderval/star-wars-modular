import { CharacterService } from './../character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  id: number;
  title: string;
  dataCharacter: any = {
    character: null,
    specie: null
  };

  constructor(private route: ActivatedRoute, private _characterService: CharacterService) {
    this.title = 'Character Detail';
   }


  ngOnInit() {
    // get parameter id
    this.route.params.subscribe(
      (params: any) => {
        this.id = parseInt(params['id']);
      }
    );


    this._characterService.getCharacter(this.id).subscribe(
        character => {

          this.dataCharacter.character = character;
          this._characterService.getCharacterSpecie(character['species'][0]).subscribe(specie => {
            this.dataCharacter.specie = specie;
          })
      }
    );
  }

}
