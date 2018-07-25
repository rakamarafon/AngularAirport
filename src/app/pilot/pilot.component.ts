import { Component, OnInit, Injectable } from '@angular/core';
import { Pilot } from 'src/app/pilot/pilot'
import {HttpClient} from '@angular/common/http';
import { withBody } from '../../../node_modules/@angular/core/testing';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})


export class PilotComponent implements OnInit {
  
  url = 'http://localhost:5000/api/Pilots';
  pilots : Pilot[];

  deletedPilot: Pilot;

  constructor(private http: HttpClient) {   }

  ngOnInit() {
    this.getPilots();
  }

  getPilots() {
   this.http.get<Pilot[]>(this.url).subscribe(result => {
    this.pilots = result;
    }, error => console.error(error));
    }

  delete(id: number)
  {
    this.http.delete<Pilot>(this.url + "/" + id).subscribe(result => {
      this.deletedPilot  = result;
      }, error => console.error(error));      
  }

  update(id: number)
  {

    
  }
}



