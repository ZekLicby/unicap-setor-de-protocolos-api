import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { InternalRegister } from './internalRegister.entity';
import { ExternalRegister } from './externalRegister.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'Funcionarios' })
class Employee {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'text', nullable: false })
  public name: string;

  @Column({ type: 'text', nullable: false })
  public role: string;

  @Column({ type: 'text', nullable: false })
  public email: string;

  @Column({ type: 'text', nullable: false })
  public departament: string;

  @Column({ type: 'date', nullable: false })
  public birthdate: Date;

  @Column({ type: 'text', nullable: false })
  public registrationNumber: string;

  @Exclude()
  @Column({ type: 'text', nullable: false })
  private passwordHash: string;
  public get getPasswordHash(): string {
    return this.passwordHash;
  }
  public set setPasswordHash(value: string) {
    this.passwordHash = value;
  }

  @OneToMany(
    () => InternalRegister,
    (internalRegister) => internalRegister.employee,
    { cascade: true, onDelete: 'CASCADE' },
  )
  public internalRegister: InternalRegister[] | null | undefined;

  @OneToMany(
    () => ExternalRegister,
    (externalRegister) => externalRegister.employee,
    { cascade: true, onDelete: 'CASCADE' },
  )
  public externalRegister: ExternalRegister[] | null | undefined;

  @CreateDateColumn({ name: 'created_at', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  deletedAt: Date;
}

export default Employee;
