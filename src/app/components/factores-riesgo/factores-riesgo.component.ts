import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WsService } from '../../services/ws/ws.service';
import { AuthService } from '../../services/auth/auth.service';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { MdDialog, MdDialogRef, MdSelectChange, MdCard, MdCardSubtitle  } from '@angular/material';

@Component({
  selector: 'app-factores-riesgo',
  templateUrl: './factores-riesgo.component.html',
  styleUrls: ['./factores-riesgo.component.css']
})
export class FactoresRiesgoComponent implements OnInit {
 
  public hipertension:boolean;
  public diabetes:boolean;
  public insulina:boolean;
  public tabaquismo:number;
  public antesedentes:number;
  public Dislipemia:number;
  
  constructor() { }

  ngOnInit() {
    
  }

  mostrar(){
      console.info(this.tabaquismo);
  }
}
