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
  isEdit: boolean;
  isNewRecord: boolean;
  editStew: Stewardesses;
  

  constructor(public route: ActivatedRoute, public home: Router, private serv: StewardessesService) {
    this.isEdit = false;
    this.isNewRecord = false;
   }

  ngOnInit() {
    this.route.params.subscribe((data: Stewardesses) => {
      this.stew = data;
    });
    this.editStew = new Stewardesses(0, null, "","","");
  }

  back(){
    this.home.navigate(['/stewardesses']);
  }

  loadTemplate(stew: Stewardesses) {
    if (stew.id > 0 && this.isEdit == false) {    
      return this.readOnlyTemplate;
    } else {     
        this.isNewRecord = true;    
        return this.editTemplate;
    }
  }

  deleteStewardesses(stew: Stewardesses) {
    this.serv.deleteStewardesses(stew.id).subscribe(data => {
      this.backHome();
    });
  }

  update(st: Stewardesses){
     this.isEdit = true;
     this.isNewRecord = false;
     this.editStew = new Stewardesses(st.id, st.crewModelId, st.firstName, st.secondName, st.birthDay);
  }

  saveUpdates(){
    if(this.isEdit){
      debugger;
      this.serv.updateStewardesses(this.editStew.id, this.editStew).subscribe(data => {
      this.backHome();
      });
    } else {
      debugger;
      this.serv.createStewardesses(this.editStew).subscribe(data => {      
      this.backHome();
      });
    }      
  }

  cancel(){
    this.isEdit = false;
  }

  private backHome(){
    this.isEdit = false;
    this.home.navigate(['/stewardesses']);
  }
}
