import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import Funcionario from './funcionario.entity';

@Entity({ name: 'FichasPrimarias' })
export class RegistroPrimario {
  @PrimaryColumn('uuid')
  public id: string;

  @Column({ type: 'text', length: 50, nullable: false })
  public RA: string;

  @Column({ type: 'text', length: 50, nullable: false })
  public curso: string;

  @Column({ type: 'date', nullable: false })
  public encaminhado: Date;

  @Column({ type: 'text', length: 20, nullable: false })
  public fone: string;

  @Column({ type: 'text', length: 20, nullable: false })
  public orgao: string;

  @Column({ type: 'text', length: 255, nullable: false })
  public notas: string;

  @ManyToOne(() => Funcionario, (funcionario) => funcionario.registroPrimario)
  public funcionario: Funcionario;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
