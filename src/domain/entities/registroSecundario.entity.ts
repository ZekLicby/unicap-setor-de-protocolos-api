import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'FichasSecundarias' })
export class RegistroSecundario {
  @PrimaryColumn('uuid')
  public id: string;

  @Column({ type: 'text' })
  public tipoDoc: string;

  @Column({ type: 'text' })
  public notas: string;

  @Column({ type: 'text' })
  public assuntos: string;

  @Column({ type: 'text' })
  public registroPor: string;

  @Column({ type: 'text' })
  public RA: string;

  @Column({ type: 'text' })
  public curso: string;

  @Column({ type: 'date' })
  public encaminhado: Date;

  @Column({ type: 'text' })
  public orgao: string;

  //public registroPrimario: RegistroPrimario;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
