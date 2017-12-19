import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef, MdButton, MdDialogClose, MdDialogActions, MdDialogContent } from '@angular/material';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  @Input() mensaje;
  
  constructor(public dialogRef: MdDialogRef<MensajeComponent>) { 


  }

  ngOnInit() {
    
  }
  
  public cargarMensaje(mes:string)
  {
    this.mensaje = mes ;
  }
}
