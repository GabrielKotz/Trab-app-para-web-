import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";

export class usuariodto{
    @IsString({ message: 'Não é uma string válida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(30, {message: 'Máximo 30 caracteres.'})
    name: String;
    
    @IsString({ message: 'Não é uma string válida'})
    @MinLength(1,{message: 'Mínimo 1 caracteres.'})
    @MaxLength(3, {message: 'Máximo 3 caracteres.'})
    Idade: String;

    @IsString({ message: 'Não é uma string válida'})
    @MinLength(11,{message: 'Mínimo 11 caracteres.'})
    @MaxLength(11, {message: 'Máximo 11 caracteres.'})
    CPF: String;

    @IsString({ message: 'Não é uma string válida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(80, {message: 'Máximo 80 caracteres.'})
    Email: String;

    @IsString({ message: 'Não é uma string válida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(30, {message: 'Máximo 30 caracteres.'})
    Endereço: String;

    @IsString({ message: 'Não é uma string válida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(70, {message: 'Máximo 70 caracteres.'})
    Estadocivil: String;

    @IsString({ message: 'Não é uma string válida'})
    @MinLength(8,{message: 'Mínimo 8 caracteres.'})
    @MaxLength(20, {message: 'Máximo 20 caracteres.'})
    Celular: String;

    @IsString({ message: 'Não é uma string válida'})
    @MinLength(8,{message: 'Mínimo 8 caracteres.'})
    @MaxLength(15, {message: 'Máximo 15 caracteres.'})
    nascimento: String;

    @IsString({ message: 'Não é uma string válida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(90, {message: 'Máximo 90 caracteres.'})
    Profissao: String;

    @IsInt({ message: 'Inteiro nao e valido'})
    id: number;


}



