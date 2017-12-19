import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-obstruccion',
  templateUrl: './obstruccion.component.html',
  styleUrls: ['./obstruccion.component.css']
})
export class ObstruccionComponent implements OnInit {


  @Input()
  obstrucciones;

  public obstruccionActual;

  
  // set obstrucciones(value){
  //   this._obstrucciones = value;
  //   if(!this._obstrucciones || this._obstrucciones.length == 0 )
  //     this._obstrucciones = [{numero:1}];
    
  //   this.obstruccionActual = this._obstrucciones[0];
  // }
  // get obstrucciones()
  // {
  //   return this._obstrucciones;
  // }

  constructor() { }

  ngOnInit() {
  }
  
  buscar(){
    let salida = false;
    if(this.obstruccionActual && (<Array<any>>(this.obstrucciones)).some(x=> x ==this.obstruccionActual))
        salida = true;
    return salida;
  }

  Agregar() {
    if (this.obstrucciones.length < 3) {
      this.obstrucciones.push({ numero: this.obstrucciones.length + 1});      
      this.obstruccionActual = this.obstrucciones[this.obstrucciones.length -1]; 
    }
  }
}
