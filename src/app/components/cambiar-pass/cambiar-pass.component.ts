import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WsService } from '../../services/ws/ws.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-cambiar-pass',
  templateUrl: './cambiar-pass.component.html',
  styleUrls: ['./cambiar-pass.component.css']
})
export class CambiarPassComponent implements OnInit {

  public error: Boolean  = false;
  public password :string ;
  public  password2:string ;
  public passwordOld :string ;
  public loading:boolean = false;
  constructor(private router: Router, private ws: WsService,public auth: AuthService) { }

  ngOnInit() {
  }

   changePass(e: any,b) {

    if (e.keyCode == 13 && !this.error)
      {
        this.enviar();
      }

    let valor1= this.passwordOld;
    let valor2= this.password;
    let valor3= this.password2;
   switch(b){           
      case 2:
      valor2 = e.target.value  + e.key;
      break;
      case 3:
      valor3 = e.target.value  + e.key;
      break;
   }
   
    this.error=((valor2 !== valor3) || (valor1 == '')) ;
    
  }

  enviar() {
    this.loading = true;
    var user = this.auth.getInfo();    
    this.ws.chagePass({username:user.actort,password:this.passwordOld, newPass: this.password})
      .then(data => {
        data = JSON.parse(data);
        
        this.auth.logOut();
        this.router.navigateByUrl("/Login");
        
        this.loading = false;
      })
      .catch(e => {
          this.auth.logOut();
        this.loading = false;
        console.log(e);
      });
  }


}
