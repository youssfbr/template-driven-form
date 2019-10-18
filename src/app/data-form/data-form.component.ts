import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nome: [null],
      email: [null]
    });
  }

  onSubmit(event) {
    console.log(event);
    console.log(this.formulario);
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(response => {
        console.log(response);
        this.resetar();
      },
      (error: any) => alert('erro'));
//    this.http.get(`//viacep.com.br/ws/${cep}/json`)
//    .subscribe(dados => this.populaDadosForm(dados, form));
   // .subscribe(dados => console.log(dados));
}

resetar() {
  this.formulario.reset();
}

}
