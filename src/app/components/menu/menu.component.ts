import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public logueado: boolean;
  public Roles;
  private done = false;
  constructor(private router: Router, public auth: AuthService) {
    
    
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.done = true;
    }, 1);    
  }

  nombre() {    
    let user = this.auth.getToken();    
    return user.data.nombre;
  }

  Role(numero:string){
    if(this.done && this.Roles)
    return this.Roles.filter(x=> x == numero).length > 0;
    else
      return false;
  }
  ngOnInit() {
  }
  salir() {
    localStorage.setItem('token', null);
    this.router.navigate(['/Login']);
  }
}
