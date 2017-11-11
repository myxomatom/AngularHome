import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'datepicker-overview',
  templateUrl: 'datepicker-overview.html',
  styleUrls: ['datepicker-overview.css'],
})
export class DatepickerOverview {

  private dateDeb : Date;
  private dateFin : Date;
  private _graphID : number;

  @Output() sendDate = new EventEmitter();
  @Input()
    set graphID(ID : number) {
      this._graphID = ID;
    }

  public onInput(data:any){
    data.graphID = this._graphID;
    let IDinput = Number(data.targetElement.id.substr(10));
    if (IDinput%2){
      this.dateFin = data.value;
      data.fin = data.value;
      data.debut = this.dateDeb;
    }
    else{
      this.dateDeb = data.value;
      data.debut = data.value;
      data.fin = this.dateFin;
    }

    if ( typeof this.dateDeb === 'undefined' || isNaN(this.dateDeb.getDate()) ||
         typeof this.dateFin === 'undefined' || isNaN(this.dateFin.getDate()) ) {
      console.log("Début : " + this.dateDeb + " --- Fin : " + this.dateFin);
    }
    else {
      this.sendDate.emit(data);
    }
  }
}
