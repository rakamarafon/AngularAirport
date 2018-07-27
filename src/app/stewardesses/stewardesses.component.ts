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

  constructor(private serv: StewardessesService, public router: Router) { 
    this.stewardesses = new Array<Stewardesses>();
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

}
