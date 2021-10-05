import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDefined,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { RealtyStatusEnum } from 'src/enums/realty.enum';
import { Transform } from 'class-transformer';

export class RealtyDto {
  @ApiPropertyOptional({ example: -47.7878787554 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 8 })
  @Transform((arg) => Number(arg.value))
  latitude?: number;

  @ApiPropertyOptional({ example: -27.545548 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 8 })
  @Transform((arg) => Number(arg.value))
  longitude?: number;

  @ApiProperty({ example: 'SP' })
  @IsString({ message: 'Field must be in string' })
  @IsDefined({ message: `$property can't be empty` })
  state: string;

  @ApiProperty({ example: 'São Paulo' })
  @IsString({ message: 'Field must be in string' })
  @IsDefined({ message: `$property can't be empty` })
  city: string;

  @ApiProperty({ example: 'Centro' })
  @IsString({ message: 'Field must be in string' })
  @IsDefined({ message: `$property can't be empty` })
  neighborhood: string;

  @ApiProperty({ example: 'Rua Francisco Souto' })
  @IsString({ message: 'Field must be in string' })
  @IsDefined({ message: `$property can't be empty` })
  street: string;

  @ApiProperty({ example: 3546 })
  @IsNumber({}, { message: 'Field must be in number' })
  @IsDefined({ message: `$property can't be empty` })
  @Transform((arg) => Number(arg.value))
  number: number;

  @ApiPropertyOptional({ example: 'complement' })
  @IsOptional()
  complement?: string;

  @ApiProperty({ example: '15823-000' })
  @IsString({ message: 'Field must be in string' })
  @IsDefined({ message: `$property can't be empty` })
  postalCode: string;

  @ApiProperty({ example: 4 })
  @IsNumber({}, { message: 'Field must be in number' })
  @IsDefined({ message: `$property can't be empty` })
  numberRooms: number;

  @ApiProperty({ example: 145.28 })
  @IsNumber({}, { message: 'Field must be in number' })
  @IsDefined({ message: `$property can't be empty` })
  @Transform((arg) => Number(arg.value))
  buildingArea: number;

  @ApiProperty({ example: 2 })
  @IsNumber({}, { message: 'Field must be in number' })
  @IsDefined({ message: `$property can't be empty` })
  @Transform((arg) => Number(arg.value))
  parkingSpaces: number;

  @ApiProperty({ example: 'AVALLIABLE' })
  @IsEnum(RealtyStatusEnum, { message: 'Field must be in Enum' })
  @IsDefined({ message: `$property can't be empty` })
  status: RealtyStatusEnum;

  @ApiProperty({ example: 585745.45 })
  @IsNumber({}, { message: 'Field must be in number' })
  @IsDefined({ message: `$property can't be empty` })
  @Transform((arg) => Number(arg.value))
  amount: number;
}
