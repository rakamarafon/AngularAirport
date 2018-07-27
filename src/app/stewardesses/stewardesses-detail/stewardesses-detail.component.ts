import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stewardesses } from '../stewardesses';


@Component({
  selector: 'app-stewardesses-detail',
  templateUrl: './stewardesses-detail.component.html',
  styleUrls: ['./stewardesses-detail.component.css']
})
export class StewardessesDetailComponent implements OnInit {

  stew: Stewardesses;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data: Stewardesses) => {
      this.stew = data;
    });
  }

}
