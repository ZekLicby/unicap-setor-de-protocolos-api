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

@Entity({ name: 'FichasSecundarias' })
export class RegistroSecundario {
  @PrimaryColumn('uuid')
  public id: string;

  @Column({ type: 'text', length: 50, nullable: false })
  public tipoDoc: string;

  @Column({ type: 'text', length: 250, nullable: false })
  public notas: string;

  @Column({ type: 'text', length: 50, nullable: false })
  public assuntos: string;

  @Column({ type: 'text', length: 50, nullable: false })
  public registroPor: string;

  @Column({ type: 'text', length: 50, nullable: false })
  public RA: string;

  @Column({ type: 'text', length: 50, nullable: false })
  public curso: string;

  @Column({ type: 'date' })
  public encaminhado: Date;

  @Column({ type: 'text' })
  public orgao: string;

  @ManyToOne(() => Funcionario, (funcionario) => funcionario.registroSecundario)
  public funcionario: Funcionario;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
