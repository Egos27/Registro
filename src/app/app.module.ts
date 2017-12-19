import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {MaterialModule,MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginaNoEncontradaComponent } from "./components/pagina-no-encontrada/pagina-no-encontrada.component";
import { LoginComponent } from './components/login/login.component';

import { WsService }  from './services/ws/ws.service';
import { AuthService } from './services/auth/auth.service';
import { VerificarJWTService } from './services/verificar-jwt/verificar-jwt.service';
import { JwtModule } from './jwt/jwt.module';
import { ButtonRenderComponent } from './components/button-render/button-render.component';
import { LoaddingComponent } from './components/loadding/loadding.component';

import {ImageZoomModule} from 'angular2-image-zoom';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { Draggable } from 'ng2draggable/draggable.directive';
import { CambiarPassComponent } from './components/cambiar-pass/cambiar-pass.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DatosGeneralesComponent } from './components/datos-generales/datos-generales.component';
import { FactoresRiesgoComponent } from './components/factores-riesgo/factores-riesgo.component';
import { AntecedentesComponent } from './components/antecedentes/antecedentes.component';
import { CuadroClinicoComponent } from './components/cuadro-clinico/cuadro-clinico.component';
import { FuncionSistolicaComponent } from './components/funcion-sistolica/funcion-sistolica.component';
import { CoronariografiaComponent } from './components/coronariografia/coronariografia.component';
import { ProcedimientoComponent } from './components/procedimiento/procedimiento.component';
import { GeneralProcedimientoComponent } from './components/general-procedimiento/general-procedimiento.component';
import { ObstruccionComponent } from './components/obstruccion/obstruccion.component';
import { StensColocadosComponent } from './components/stens-colocados/stens-colocados.component';

const appRoutes: Routes =
[{path:'Login', component:LoginComponent},
{path:'Registro',component:RegistroComponent, canActivate: [VerificarJWTService]},
{path:'cambiarPass',component:CambiarPassComponent, canActivate: [VerificarJWTService]},
{ path: '',   redirectTo: '/Registro', pathMatch: 'full' },
{path:'**',component: PaginaNoEncontradaComponent},
{path: 'error', component:MensajeComponent, canActivate: [VerificarJWTService]}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    PaginaNoEncontradaComponent,
    ButtonRenderComponent,
    LoaddingComponent,
    MensajeComponent,
    Draggable,
    CambiarPassComponent,
    RegistroComponent,
    DatosGeneralesComponent,
    FactoresRiesgoComponent,
    AntecedentesComponent,
    CuadroClinicoComponent,
    FuncionSistolicaComponent,
    CoronariografiaComponent,
    ProcedimientoComponent,
    GeneralProcedimientoComponent,
    ObstruccionComponent,
    StensColocadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JwtModule,
    RouterModule.forRoot(appRoutes),
      MaterialModule,
      MdNativeDateModule,
      BrowserAnimationsModule,
      Ng2SmartTableModule,
      ImageZoomModule
  ],
   entryComponents: [
    ButtonRenderComponent
   ],
  providers: [
    WsService,
    AuthService,
    VerificarJWTService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
