import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FilterRealtyDto } from './dto/filterRealty.dto';
import { RealtyDto } from './dto/realty.dto';
import { RealtyService } from './realty.service';

@Controller('realty')
@ApiTags('Realty')
export class RealtyController {
  constructor(private readonly serviceRealty: RealtyService) {}

  @ApiOperation({ summary: 'Get all realties' })
  @ApiOkResponse({ isArray: false, type: RealtyDto })
  @ApiBadRequestResponse({ type: HttpException })
  @ApiInternalServerErrorResponse({ type: HttpException })
  @Get('')
  async getAll(): Promise<RealtyDto[]> {
    return this.serviceRealty.getAllRealty();
  }

  @ApiOperation({ summary: 'Get realty by id' })
  @ApiOkResponse({ isArray: false, type: RealtyDto })
  @ApiBadRequestResponse({ type: HttpException })
  @ApiInternalServerErrorResponse({ type: HttpException })
  @Get('id/:id')
  async getById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<RealtyDto> {
    return this.serviceRealty.getById(id);
  }

  @ApiOperation({ summary: 'Create a new realty' })
  @ApiOkResponse({ isArray: false, type: RealtyDto })
  @ApiBadRequestResponse({ type: HttpException })
  @ApiInternalServerErrorResponse({ type: HttpException })
  @Post('')
  async create(@Body() params: RealtyDto): Promise<RealtyDto> {
    return this.serviceRealty.create(params);
  }

  @ApiOperation({ summary: 'Update a realty' })
  @ApiOkResponse({ isArray: false, type: RealtyDto })
  @ApiBadRequestResponse({ type: HttpException })
  @ApiInternalServerErrorResponse({ type: HttpException })
  @Put(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() params: RealtyDto,
  ): Promise<RealtyDto> {
    return this.serviceRealty.update(params, id);
  }

  @ApiOperation({ summary: 'Delete a realty' })
  @ApiOkResponse({ isArray: false, type: RealtyDto })
  @ApiBadRequestResponse({ type: HttpException })
  @ApiInternalServerErrorResponse({ type: HttpException })
  @Delete(':id')
  async delete(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<RealtyDto> {
    return this.serviceRealty.delete(id);
  }

  @ApiOperation({ summary: 'Delete a realty' })
  @ApiOkResponse({ isArray: false, type: RealtyDto })
  @ApiBadRequestResponse({ type: HttpException })
  @ApiInternalServerErrorResponse({ type: HttpException })
  @Get('/filter')
  async filter(@Query() query?: FilterRealtyDto): Promise<RealtyDto[]> {
    return this.serviceRealty.filter(query);
  }
}
