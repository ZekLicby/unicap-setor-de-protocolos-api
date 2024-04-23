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
import Funcionario from './funcionario.entity';

@Entity({ name: 'FichasPrimarias' })
export class RegistroPrimario {
  @PrimaryGeneratedColumn('increment')
  public id: string;

  @Column({ type: 'text', nullable: false })
  public RA: string;

  @Column({ type: 'text', nullable: false })
  public curso: string;

  @Column({ type: 'date', nullable: false })
  public encaminhado: Date;

  @Column({ type: 'text', nullable: false })
  public fone: string;

  @Column({ type: 'text', nullable: false })
  public orgao: string;

  @Column({ type: 'text', nullable: false })
  public notas: string;

  @ManyToOne(() => Funcionario, (funcionario) => funcionario.registroPrimario, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  public funcionario: Funcionario;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
