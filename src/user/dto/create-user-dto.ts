import { IsEmail, IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNumberString()
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}