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
  character: Character;
  constructor(
    private route: ActivatedRoute,
    private _characterService: CharacterService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = parseInt(params['id']);
      }
    );

    this._characterService.getCharacter(this.id).subscribe(
      (character: Character) => {
        this.character = character;
      });
  }

}
