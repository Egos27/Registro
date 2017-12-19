import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import { LoginComponent } from './components/login/login.component';




export const appRoutingProviders: any[] = 
[{path:'login',component:LoginComponent},
{ path: '',   redirectTo: '/pagina1', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutingProviders);


