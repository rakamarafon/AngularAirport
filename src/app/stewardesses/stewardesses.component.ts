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
  isSortSecondName: boolean;
  isSortByBirthDate: boolean;
  isSortByCrew: boolean;


  constructor(private serv: StewardessesService, public router: Router) { 
    this.stewardesses = new Array<Stewardesses>();
    this.isSortByName = false;
    this.isSortSecondName = false;
    this.isSortByBirthDate = false;
    this.isSortByCrew = false;
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

  sortBySecondName(){
    if(this.isSortSecondName){
      this.stewardesses.sort(function (a, b) {
        if (a.secondName > b.secondName) {
          return 1;
        }
        if (a.secondName < b.secondName) {
          return -1;
        }
        return 0;
      });
      this.isSortSecondName = false;
    } else {
      this.stewardesses.reverse();
      this.isSortSecondName = true;
    }    
  } 

  sortByBirthDate(){
    if(this.isSortByBirthDate){
      this.stewardesses.sort(function (a, b) {
        if (a.birthDay > b.birthDay) {
          return 1;
        }
        if (a.birthDay < b.birthDay) {
          return -1;
        }
        return 0;
      });
      this.isSortByBirthDate = false;
    } else {
      this.stewardesses.reverse();
      this.isSortByBirthDate = true;
    }    
  }
  
  sortByCrew(){
    if(this.isSortByCrew){
      this.stewardesses.sort(function(a, b) {
        return a.crewModelId - b.crewModelId;
      });
      this.isSortByCrew = false;
    } else {
      this.stewardesses.reverse();
      this.isSortByCrew = true;
    }    
  }

}
