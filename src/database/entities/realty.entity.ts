import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('realty')
export class RealtyEntity extends BaseEntity {
  @Column({ name: 'latitude' })
  latitude: number;

  @Column({ name: 'longitude' })
  longitude: number;

  @Column({ name: 'state' })
  state: string;

  @Column({ name: 'city' })
  city: string;

  @Column({ name: 'neighborhood' })
  neighborhood: string;

  @Column({ name: 'street' })
  street: string;

  @Column({ name: 'number' })
  number: number;

  @Column({ name: 'complement' })
  complement: string;

  @Column({ name: 'postalCode' })
  postalCode: string;

  @Column({ name: 'status' })
  status: string;

  @Column({ name: 'numberRooms' })
  numberRooms: number;

  @Column({ name: 'buildingArea' })
  buildingArea: number;

  @Column({ name: 'parkingSpaces' })
  parkingSpaces: number;

  @Column({ name: 'amount' })
  amount: number;
}
