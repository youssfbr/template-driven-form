import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form) {
    // console.log(form.value);
    // console.log(this.usuario);
    console.log(form);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .subscribe(dados => console.log(dados));

  }

  consultaCEP(cep, form) {
    // Nova variavel "cep" somente com digitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se o campo cep possui valor informado.
    if (cep !== '') {

      // Expressão regular para validar o CEP.
      const validacao = /^[0-9]{8}$/;

      // Valida o formato de CEP.
      if (validacao.test(cep)) {

        this.resetaDadosForm(form);

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .subscribe(dados => this.populaDadosForm(dados, form));
         // .subscribe(dados => console.log(dados));
      }
    }
  }

  /* Método criado para não deixar toda a lógica dentro do subscribe. Com isso o código fica
  mais limpo e organizado. Recebe os dados do webservice e também uma referência ao próprio
  formulário, já que estamos trabalhando com formulários do tipo template driven, toda lógica
  fica no template HTML.
  */
  populaDadosForm(dados, formulario) {
    /*formulario.setValue({ // setValue recebe um objeto como parâmetro e dentro desse obg passamos os campos do formulario.
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }*
    });*/

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
    // console.log(formulario);
  }

  resetaDadosForm(formulario) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
