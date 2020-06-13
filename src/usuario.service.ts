import { UsuarioEntidade } from "./usuario"
import { Injectable } from '@nestjs/common';
@Injectable()

export class UsuarioService{

    usuario:Array<UsuarioEntidade> =[];

constructor() {
    let UsuarioLista = new UsuarioEntidade();
    UsuarioLista.ID =1;
    UsuarioLista.name ='Gabriel Kotz';
    UsuarioLista.idade ='19';
    UsuarioLista.CPF ='064.015.385.44-86';
    UsuarioLista.Celular ='99069560';
    UsuarioLista.Email ='gabriel.kotz.01@edu.unipar.com.br';
    UsuarioLista.Endereço ='rua sao borja 272';
    UsuarioLista.Profissao ='Analista de Suporte';
    UsuarioLista.Nascimento ='22/01/2001';
    UsuarioLista.EstadoCivil ='Solteiro';
    this.usuario.push(UsuarioLista);
} 
async findAll(){
    return this.usuario;
}

async save(usuario: UsuarioEntidade) {
    this.usuario.push(usuario);

}
}
