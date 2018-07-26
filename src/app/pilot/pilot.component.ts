import { Component, OnInit, Injectable } from '@angular/core';
import { Pilot } from './pilot'
import {HttpClient} from '@angular/common/http';
import { withBody } from '@angular/core/testing';

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
      this.getPilots();      
      }, error => console.error(error));      
  }

  update(id: number, pilot: Pilot)
  {
    console.log(pilot);
      let body = {Id: pilot.id, firstName: "Trololo", secondName: pilot.secondName, birthDay: pilot.birthDay, experiance: pilot.experience, crewModelId: pilot.crewId};
      console.log(body);
      
      
      debugger;
      //const body = {Id: pilot.id, FirstName: "angular firsth name", SecondName: "angular second name", BirthDay: "12.12.1222", Experiance: 100, CrewId: 29};
      this.http.put<Pilot>(this.url + "/" + id, body).subscribe(result => {
        this.deletedPilot  = result;
        this.getPilots();      
        }, error => console.error(error));      
  }
}



