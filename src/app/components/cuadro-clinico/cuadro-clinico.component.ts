import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WsService } from '../../services/ws/ws.service';
import { AuthService } from '../../services/auth/auth.service';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { MdDialog, MdDialogRef, MdSelectChange, MdCard, MdCardSubtitle  } from '@angular/material';

@Component({
  selector: 'app-cuadro-clinico',
  templateUrl: './cuadro-clinico.component.html',
  styleUrls: ['./cuadro-clinico.component.css']
})
export class CuadroClinicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
