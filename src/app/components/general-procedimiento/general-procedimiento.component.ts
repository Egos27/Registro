import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-procedimiento',
  templateUrl: './general-procedimiento.component.html',
  styleUrls: ['./general-procedimiento.component.css']
})
export class GeneralProcedimientoComponent implements OnInit {

  @Input('general')
  public general;

  constructor() {
    this.general = {Fecha:Date.now()};
   }

  ngOnInit() {
    
  }

}
