import { IsString, Max, Min, IsInt, IsEmail, Matches, IsOptional  } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiPropertyOptional( {description: 'find user wiht a specific id', example: '1234'})
    @IsInt()
    @IsOptional()
    id?: number;
    

    @ApiPropertyOptional()
    @IsString()
    name?: string;

    @IsInt()
    @Min(20)
    @Max(100)
    @IsOptional()
    age?: number;

    @IsString()
    @IsEmail()
    @IsOptional()
    readonly email?: string;

    @IsString()
    @IsOptional()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{
        message: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character',
    })
    readonly password?: string;

    @IsOptional()
    @Matches(/^\+234-\d{3}-\d{7}$/,{
        message: "Phone number must be in the format +234-XXX-XXXXXXX",
    })
    readonly phoneNumber?: string;

}
