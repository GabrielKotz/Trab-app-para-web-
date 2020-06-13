import { UsuarioService } from "./usuario.service";
import { plainToClass } from "class-transformer";
import { Controller, Get, Body, Post } from "@nestjs/common";
import { usuariodto } from "./usuario.dto";
import { UsuarioEntidade } from "./usuario";

@Controller('usuario')

export class UsuarioController{
constructor(private  readonly service:UsuarioService){}

@Get()
findAll(){

  return this.service.findAll();
    
}
@Post()
save(@Body() usuariodto: usuariodto) {
    const usuario = plainToClass(UsuarioEntidade, usuariodto);
    return this.service.save(usuario);

}


}

