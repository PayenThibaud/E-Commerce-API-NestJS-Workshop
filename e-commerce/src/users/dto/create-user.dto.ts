import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'This field represents the new user nickname',
    minLength: 5,
    maxLength: 50,
  })
  @IsString()
  @Length(5, 50)
  public pseudo: string;

  @ApiProperty({
    description: 'This field represents the new user mail address',
    minLength: 2,
    maxLength: 75,
    example: 'mymail@gmail.com',
  })
  @IsEmail()
  @Length(2, 75)
  public mail: string;

  @ApiProperty({
    description: 'This field represents account username',
    minLength: 7,
    maxLength: 75,
  })
  @IsString()
  public username: string;

  @ApiProperty({
    description: 'This field represents account password',
    minLength: 8,
    maxLength: 130,
  })
  @IsString()
  public password: string;
}
