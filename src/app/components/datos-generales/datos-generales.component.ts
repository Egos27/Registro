import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WsService } from '../../services/ws/ws.service';
import { AuthService } from '../../services/auth/auth.service';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { MdDialog, MdDialogRef, MdSelectChange, MdCard, MdCardSubtitle  } from '@angular/material';


@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnInit {
  public nombre:string;
  public fechaATC:Date;
  public edad:number;
  public sexo:number;
  public peso:number;
  public talla:number;
  public IMC:number;
  public inicacionATC:number;

  constructor() { }

  ngOnInit() {
  }

  calculaIMC(){
    if(this.peso && this.talla)
      this.IMC = this.peso * 10000/ (this.talla * this.talla)
  }
}
