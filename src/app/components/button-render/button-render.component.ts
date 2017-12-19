import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-button-render',
  templateUrl: './button-render.component.html',
  styleUrls: ['./button-render.component.css']
})
export class ButtonRenderComponent implements OnInit {

  public InformatizacionSerieDocumentalId;
  
  @Input() value;
  @Input() rowData: any;

  constructor(public dialog: MdDialog) {  }

  ngOnInit() {
    this.InformatizacionSerieDocumentalId = this.value;
  }

  buscarImagenes() {
     
    
  }


}




   


