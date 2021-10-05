import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class FilterRealtyDto {
  @ApiPropertyOptional({ example: 4 })
  @Transform((arg) => Number(arg.value), { toPlainOnly: true })
  @IsOptional()
  @IsNumber({}, { message: 'Field must be in number' })
  numberRooms?: number;

  @ApiPropertyOptional({ example: 145.28 })
  @Transform((arg) => Number(arg.value), { toPlainOnly: true })
  @IsOptional()
  @IsNumber({}, { message: 'Field must be in number' })
  buildingArea?: number;

  @ApiPropertyOptional({ example: 2 })
  @Transform((arg) => Number(arg.value), { toPlainOnly: true })
  @IsOptional()
  @IsNumber({}, { message: 'Field must be in number' })
  parkingSpaces?: number;
}
