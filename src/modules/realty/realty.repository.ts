import { RealtyEntity } from 'src/database/entities/realty.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(RealtyEntity)
export class RealtyRepostiry extends Repository<RealtyEntity> {}
