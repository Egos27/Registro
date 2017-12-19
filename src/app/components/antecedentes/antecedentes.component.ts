import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WsService } from '../../services/ws/ws.service';
import { AuthService } from '../../services/auth/auth.service';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { MdDialog, MdDialogRef, MdSelectChange, MdCard, MdCardSubtitle  } from '@angular/material';
import {Antecedente} from '../../clases/antecedente';

@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.component.html',
  styleUrls: ['./antecedentes.component.css']
})
export class AntecedentesComponent implements OnInit {

  public Antecedentes:Antecedente;
  constructor() { 
    this.Antecedentes = new Antecedente();
  }

  ngOnInit() {
  }

}
