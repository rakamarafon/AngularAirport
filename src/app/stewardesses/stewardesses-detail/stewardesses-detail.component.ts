import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stewardesses } from '../stewardesses';
import { StewardessesService } from '../../services/stewardesses.service';


@Component({
  selector: 'app-stewardesses-detail',
  templateUrl: './stewardesses-detail.component.html',
  styleUrls: ['./stewardesses-detail.component.css']
})
export class StewardessesDetailComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
  
  stew: Stewardesses;
  editedStew: Stewardesses;

  constructor(public route: ActivatedRoute, public home: Router, private serv: StewardessesService) { }

  ngOnInit() {
    this.route.params.subscribe((data: Stewardesses) => {
      this.stew = data;
    });
  }

  back(){
    this.home.navigate(['/stewardesses']);
  }

  loadTemplate(stew: Stewardesses) {
    if (this.editedStew && this.editedStew.id == stew.id) {
        return this.editTemplate;
    } else {
        return this.readOnlyTemplate;
    }
  }

  deleteStewardesses(stew: Stewardesses) {
    this.serv.deleteStewardesses(stew.id).subscribe(data => {
      this.home.navigate(['/stewardesses']);
    });
  }
}
