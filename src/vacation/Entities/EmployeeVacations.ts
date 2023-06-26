import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { vacationEnum } from '../types/vacationEnum';

@Entity()
export class EmployeeVacation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vacationType: vacationEnum;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
