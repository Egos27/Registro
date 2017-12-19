import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WsService } from '../../services/ws/ws.service';
import { AuthService } from '../../services/auth/auth.service';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { MdDialog, MdDialogRef, MdSelectChange,MdTab,MdTabHeader, MdTabGroup } from '@angular/material';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
