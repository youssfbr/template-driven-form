import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  // Input Property -  Passa do formulario pra esse componente
  @Input() form;

  constructor() { }

  ngOnInit() {
  }

}
