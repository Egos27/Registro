import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WsService } from '../../services/ws/ws.service';
import { AuthService } from '../../services/auth/auth.service';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { MdDialog, MdDialogRef, MdSelectChange, MdCard, MdCardSubtitle } from '@angular/material';

export class User {
  public clave: string = '';
  public mail: string = "";
  public username: string;

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public loading: boolean = false;
  public recuperar: boolean = false;
  user: User = new User();
  url: string = '';
  error: boolean = false;
  constructor(private router: Router, private ws: WsService, public auth: AuthService, public dialog: MdDialog) {

  }

  ngOnInit() {
  }
  enviar() {
    this.error = false;
    this.loading = false;

    this.ws.get(this.user).then(x=>{
      localStorage.setItem("token",x);
      this.auth.setToken();
      this.router.navigateByUrl("/Registro");
      
    })

    
    
  }

  reestablecer() {
  this.error = false;
    if (this.user.username != '' && this.user.mail != '')
      this.loading = true;
    /*this.ws.getMail(this.user)
      .then(data => {
        if (data){
          this.error = false;
          let dialogRef = this.dialog.open(MensajeComponent);
          dialogRef.componentInstance.cargarMensaje("Se ha enviado la nueva contraseña a su casilla de correo");
          this.recuperar = false;
          this.user.username = "";
        }
        else
          this.recuperar = false;

        this.loading = false;
      })
      .catch(e => {
        this.loading = false;
        console.log(e);
      });
      */
      this.loading = false;
  }

  changePass(e: any, b) {
    if (e.keyCode == 13) {
      if (b.placeholder == "Email") {
        this.reestablecer();
      } else {
        b.focus();
        this.enviar();
      }
    }
  }
}
