import { CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

export class DateTimeEntity extends BaseEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
