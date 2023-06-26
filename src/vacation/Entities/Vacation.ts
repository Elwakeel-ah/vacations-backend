import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vacation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  balance: number;

  @Column()
  remaining: number;
}
