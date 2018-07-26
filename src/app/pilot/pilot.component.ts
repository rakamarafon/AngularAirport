import { Component, OnInit, Injectable, ViewChild, TemplateRef } from '@angular/core';
import { Pilot } from './pilot'
import {HttpClient} from '@angular/common/http';
import { withBody } from '@angular/core/testing';
import {PilotService} from 'src/app/services/pilot.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css'],
  providers: [PilotService]
})


export class PilotComponent implements OnInit {
  
    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
      
    editedPilot: Pilot;
    pilots: Array<Pilot>;
    isNewRecord: boolean;
    statusMessage: string;
      
    constructor(private serv: PilotService) {
        this.pilots = new Array<Pilot>();
    }
    
    ngOnInit() {
      this.loadPilots();
  }

  private loadPilots() {
    this.serv.getPilots().subscribe((data: Pilot[]) => {
            this.pilots = data;  
            debugger;
        });
  }

  addPilot() {
    this.editedPilot = new Pilot(0, 0, "", "", "", 0);
    this.pilots.push(this.editedPilot);
    this.isNewRecord = true;
  }

  editPilot(pilot: Pilot) {
    this.editedPilot = new Pilot(pilot.id, pilot.crewModelId, pilot.firstName, pilot.secondName, pilot.birthday, pilot.experience);
  }

  loadTemplate(pilot: Pilot) {
    if (this.editedPilot && this.editedPilot.id == pilot.id) {
        return this.editTemplate;
    } else {
        return this.readOnlyTemplate;
    }
  }

  savePilot() {
    if (this.isNewRecord) {
        // добавляем пользователя
        this.serv.createPilot(this.editedPilot).subscribe(data => {
            this.statusMessage = 'Данные успешно добавлены',
            this.loadPilots();
        });
        this.isNewRecord = false;
        this.editedPilot = null;
    } else {
        // изменяем пользователя
        this.serv.updatePilot(this.editedPilot.id, this.editedPilot).subscribe(data => {
            this.statusMessage = 'Данные успешно обновлены',
            this.loadPilots();
        });
        this.editedPilot = null;
    }
  }

  cancel() {
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
        this.pilots.pop();
        this.isNewRecord = false;
    }
    this.editedPilot = null;
  }
  
  // удаление пользователя
  deletePilot(pilot: Pilot) {
    this.serv.deletePilot(pilot.id).subscribe(data => {
        this.statusMessage = 'Данные успешно удалены',
        this.loadPilots();
    });
  }
}



