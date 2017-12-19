import { StarshipService } from './../starship.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import { Character } from '../../character/character';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit {
  id: number;
  pilots: Character[] = [];
  error: string;
  title: string;

  constructor(private route: ActivatedRoute,
    private _starshipService: StarshipService) {
      this.title = "";
    }

  ngOnInit() {
    this.route.params
      .subscribe( (params: Params) => {
        this._starshipService.getDetails(params['id'])
        .subscribe(
          (pilots: Character[]) => this.pilots = pilots,
          (error) => {
            this.pilots = [];
            this.error = error.error;
          }
        );
      });
  }
}
