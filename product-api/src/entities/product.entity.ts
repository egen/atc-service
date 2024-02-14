import { BaseEntityMetadata } from '../utilities/entity.metadata';

import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends BaseEntityMetadata {
  @Column({ unique: true })
  sku: string;

  @Column()
  brand: string;

  @Column({ length: '256' })
  name: string;

  @Column({ nullable: true, length: '4000' })
  description: string;

  @Column({ nullable: true, length: '256' })
  imageUrl: string;

  @Column('real')
  price: number;
}
