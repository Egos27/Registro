import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WsService } from '../../services/ws/ws.service';
import { AuthService } from '../../services/auth/auth.service';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { MdDialog, MdDialogRef, MdSelectChange, MdCard, MdCardSubtitle } from '@angular/material';


@Component({
  selector: 'app-procedimiento',
  templateUrl: './procedimiento.component.html',
  styleUrls: ['./procedimiento.component.css']
})
export class ProcedimientoComponent implements OnInit {
  procedimientoActual: any;

  public Procedimientos: Array<any>;
  public numero;
  constructor() { }

  ngOnInit() {
    this.Procedimientos = new Array<any>();    
    this.Procedimientos.push({ numero: 1, general: {Fecha:Date.now()}, obstrucciones:[] });    
    this.procedimientoActual = this.Procedimientos[0];
  }

  Agregar() {
    if (this.Procedimientos.length < 3) {
      this.Procedimientos.push({ numero: this.Procedimientos.length + 1, general: {Fecha:Date.now()}, obstrucciones:[] });      
    }
  }


}
