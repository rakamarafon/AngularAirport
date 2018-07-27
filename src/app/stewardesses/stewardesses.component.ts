import { Component, OnInit } from '@angular/core';
import { StewardessesService } from 'src/app/services/stewardesses.service';
import { Stewardesses } from './stewardesses'
import { Router } from '@angular/router';

@Component({
  selector: 'app-stewardesses',
  templateUrl: './stewardesses.component.html',
  styleUrls: ['./stewardesses.component.css'],
  providers: [StewardessesService]
})
export class StewardessesComponent implements OnInit {

  stewardesses: Array<Stewardesses>;
  isNewRecord: boolean;
  isSortByName: boolean;

  constructor(private serv: StewardessesService, public router: Router) { 
    this.stewardesses = new Array<Stewardesses>();
    this.isSortByName = false;
  }

  ngOnInit() {
    this.loadStewardesses();
  }

private loadStewardesses() {
  this.serv.getStewardesses().subscribe((data: Stewardesses[]) => {
          this.stewardesses = data;  
      });
  }

 goToDetails(stew: Stewardesses){
    this.router.navigate(['/stewDetail', stew]);
  }

  goToCreateStew(){
    this.isNewRecord = true;
    this.router.navigate(['/stewDetail', new Stewardesses(0, null, "","","")]);
  }

  sortByName(){
    if(this.isSortByName){
      this.stewardesses.sort(function (a, b) {
        if (a.firstName > b.firstName) {
          return 1;
        }
        if (a.firstName < b.firstName) {
          return -1;
        }
        return 0;
      });
      this.isSortByName = false;
    } else {
      this.stewardesses.reverse();
      this.isSortByName = true;
    }    
  } 
}
