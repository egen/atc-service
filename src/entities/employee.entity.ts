import { BaseEntityMetadata } from 'src/utilities/entity.metadata';
import { Column, Entity } from 'typeorm';

@Entity()
export class Employee extends BaseEntityMetadata {
  @Column({ length: 256 })
  name: string;

  @Column({ length: '4000' })
  description: string;

  @Column({ length: '256' })
  user: string;
}
