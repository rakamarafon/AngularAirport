import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pilot} from 'src/app/pilot/pilot';
import {Observable} from 'rxjs';

@Injectable()
export class UserService{
   
    private url = 'http://localhost:5000/api/Pilots';

    constructor(private http: HttpClient){ }
      
    getUsers(){
        return this.http.get(this.url);
    }
  
    createUser(pilot: Pilot){
        return this.http.post(this.url, pilot); 
    }
    updateUser(id: number, pilot: Pilot) {
        const urlParams = new HttpParams().set("id", id.toString());
        return this.http.put(this.url, pilot, { params: urlParams});
    }
    deleteUser(id: number){
        const urlParams = new HttpParams().set("id", id.toString());
        return this.http.delete(this.url, { params: urlParams});
    }
}