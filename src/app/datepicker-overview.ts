import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'datepicker-overview',
  templateUrl: 'datepicker-overview.html',
  styleUrls: ['datepicker-overview.css'],
})
export class DatepickerOverview implements OnInit {

  private _graphID : number;
  @Output() sendDateDeb = new EventEmitter();
  @Input()
    set graphID(ID : number) {
      this._graphID = ID;
    }
  dateDeb : Date;
  dateFin : Date;



  ngOnInit(){
    //this.dateDeb = new Date();
    //this.dateFin = new Date();
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
    this.sendDateDeb.emit(data);
  }
}
