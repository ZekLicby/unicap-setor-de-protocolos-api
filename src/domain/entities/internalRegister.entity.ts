import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Employee from './employee.entity';

@Entity({ name: 'Registro Interno' })
export class InternalRegister {
  @PrimaryGeneratedColumn('increment')
  public id: string;

  @Column({ type: 'text', nullable: false })
  public RA: string;

  @Column({ type: 'text', nullable: false })
  public course: string;

  @Column({ type: 'date', nullable: false })
  public forwardedDate: Date;

  @Column({ type: 'text', nullable: false })
  public phone: string;

  @Column({ type: 'text', nullable: false })
  public organ: string;

  @Column({ type: 'text', nullable: false })
  public notes: string;

  @ManyToOne(() => Employee, (employee) => employee.internalRegister, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  public employee: Employee;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  deletedAt: Date;
}
