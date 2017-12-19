import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loading',
  templateUrl: './loadding.component.html',
  styleUrls: ['./loadding.component.css']
})
export class LoaddingComponent implements OnInit {

  constructor() { }

  @Input() demora:boolean=false;
  
  ngOnInit() {
  }

}
