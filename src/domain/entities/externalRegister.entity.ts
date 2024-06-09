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

@Entity({ name: 'Register Externo' })
export class ExternalRegister {
  @PrimaryGeneratedColumn('increment')
  public id: string;

  @Column({ type: 'text', nullable: false })
  public documentType: string;

  @Column({ type: 'text', nullable: false })
  public notes: string;

  @Column({ type: 'text', nullable: false })
  public subject: string;

  @Column({ type: 'text', nullable: false })
  public registeredBy: string;

  @Column({ type: 'text', nullable: false })
  public RA: string;

  @Column({ type: 'text', nullable: false })
  public course: string;

  @Column({ type: 'date' })
  public forwardedDate: Date;

  @Column({ type: 'text' })
  public organ: string;

  @ManyToOne(() => Employee, (employee) => employee.externalRegister, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  public employee: Employee;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
