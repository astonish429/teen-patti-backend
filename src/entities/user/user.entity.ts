import { Column, Entity, PrimaryGeneratedColumn, Unique, BaseEntity } from 'typeorm';
import { DateTimeEntity } from '../base/dateTimeEntity';

@Entity()
export class User extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  @Unique(['email'])
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  lastLogin: string;

  @Column({ default: false })
  isStaff: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column({default: 0})
  totalCoins: number;
}
