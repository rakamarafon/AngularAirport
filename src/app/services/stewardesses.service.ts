import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Stewardesses} from 'src/app/stewardesses/stewardesses';
import {Observable} from 'rxjs';

@Injectable()
export class StewardessesService{
   
    private url = 'http://localhost:5000/api/Stewardesses';

    constructor(private http: HttpClient){ }
      
    getStewardesses(){
        return this.http.get(this.url);
    }
  
    createStewardesses(stewardesses: Stewardesses){
        return this.http.post(this.url, stewardesses); 
    }
    updateStewardesses(id: number, stewardesses: Stewardesses) {
        //const urlParams = new HttpParams().set("id", id.toString());
        return this.http.put(this.url + "/" + id, stewardesses) //, { params: urlParams});
    }
    deleteStewardesses(id: number){
        //const urlParams = new HttpParams().set("id", id.toString());
        return this.http.delete(this.url + "/" + id);  //, { params: urlParams});
    }
}