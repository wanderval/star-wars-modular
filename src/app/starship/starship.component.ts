import { Component, OnInit } from '@angular/core';

import { Starship } from './starship';
import { StarshipService } from './starship.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  starships: any[];
  title: string;
  apiName: string;
  rota: string;

  constructor(private starshipService: StarshipService) {
    this.title = 'Starship';
    this.apiName = "starships";
    this.rota = 'starship';
  }

  ngOnInit() {
    this.starshipService.getStarships()
    .subscribe(starships => this.starships = starships);
  }

}
