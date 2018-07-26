import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pilot} from 'src/app/pilot/pilot';
import {Observable} from 'rxjs';

@Injectable()
export class PilotService{
   
    private url = 'http://localhost:5000/api/Pilots';

    constructor(private http: HttpClient){ }
      
    getPilots(){
        return this.http.get(this.url);
    }
  
    createPilot(pilot: Pilot){
        return this.http.post(this.url, pilot); 
    }
    updatePilot(id: number, pilot: Pilot) {
        //const urlParams = new HttpParams().set("id", id.toString());
        debugger;
        return this.http.put(this.url + "/" + id, pilot) //, { params: urlParams});
    }
    deletePilot(id: number){
        //const urlParams = new HttpParams().set("id", id.toString());
        return this.http.delete(this.url + "/" + id);  //, { params: urlParams});
    }
}