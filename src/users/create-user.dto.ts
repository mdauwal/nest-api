import { IsString, Max, Min, IsInt, IsEmail } from "class-validator";


export class CreateUserDto {
    @IsString()
    name: string;

    @IsInt()
    @Min(20)
    @Max(100)
    age: number;

    @IsString()
    @IsEmail()
    readonly email: string;
}
