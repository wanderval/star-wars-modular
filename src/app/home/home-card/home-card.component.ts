import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  @Input() title: string;
  @Input() img: string;
  @Input() route: string;

  constructor() { }

  ngOnInit() {
  }

}
