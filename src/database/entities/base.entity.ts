import { Column, PrimaryColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'createdAt' })
  createdAt: Date;

  @Column({ name: 'updatedAt' })
  updatedAt: Date;
}
