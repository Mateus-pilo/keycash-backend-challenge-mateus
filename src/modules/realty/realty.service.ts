import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { isNumber, validate } from 'class-validator';
import { FilterRealtyDto } from './dto/filterRealty.dto';
import { RealtyDto } from './dto/realty.dto';
import { RealtyRepostiry } from './realty.repository';

@Injectable()
export class RealtyService {
  constructor(
    @InjectRepository(RealtyRepostiry)
    private readonly realtyRepository: RealtyRepostiry,
  ) {}

  async getAllRealty(): Promise<RealtyDto[]> {
    const realties = await this.realtyRepository.find({});
    return plainToClass(RealtyDto, realties);
  }

  async getById(id: number): Promise<RealtyDto> {
    if (!isNumber(id)) {
      throw new HttpException('Id not a number !', HttpStatus.BAD_REQUEST);
    }

    const realties = await this.realtyRepository.findOne(id);
    return plainToClass(RealtyDto, realties);
  }

  async create(body: RealtyDto): Promise<RealtyDto> {
    const errors = await validate(body);
    if (errors && errors.length) {
      throw new HttpException(errors, HttpStatus.CONFLICT);
    }

    const realties = await this.realtyRepository.save(body);
    return plainToClass(RealtyDto, realties);
  }

  async update(body: RealtyDto, id: number): Promise<RealtyDto> {
    const errors = await validate(body);
    if (errors && errors.length) {
      throw new HttpException(errors, HttpStatus.CONFLICT);
    }

    if (!isNumber(id)) {
      throw new HttpException('Id not a number !', HttpStatus.BAD_REQUEST);
    }

    await this.realtyRepository.update(id, body);
    return plainToClass(RealtyDto, await this.realtyRepository.findOne(id));
  }

  async delete(id: number): Promise<RealtyDto> {
    if (!isNumber(id)) {
      throw new HttpException('Id not a number !', HttpStatus.BAD_REQUEST);
    }
    const realties = await this.realtyRepository.delete(id);
    return plainToClass(RealtyDto, realties);
  }

  async filter(params: FilterRealtyDto): Promise<RealtyDto[]> {
    const errors = await validate(params);
    if (errors && errors.length) {
      throw new HttpException(errors, HttpStatus.CONFLICT);
    }

    const realties = await this.realtyRepository.find({ where: params });
    return plainToClass(RealtyDto, realties);
  }
}
