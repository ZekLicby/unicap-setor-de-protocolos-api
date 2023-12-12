import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { RegistroPrimario } from './registroPrimario.entity';
import { RegistroSecundario } from './registroSecundario.entity';

@Entity({ name: 'Funcionarios' })
class Funcionario {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'text', length: 50, nullable: false })
  public nome: string;

  @Column({ type: 'text', length: 20, nullable: false })
  public cargo: string;

  @Column({ type: 'text', length: 255, nullable: false })
  public email: string;

  @Column({ type: 'text', length: 20, nullable: false })
  public setor: string;

  @Column({ type: 'date', nullable: false })
  public dataNascimento: Date;

  @Column({ type: 'text', length: 50, nullable: false })
  public matricula: string;

  @Column({ type: 'text', length: 100, nullable: false })
  private senhaHash: string;
  public get getSenhaHash(): string {
    return this.senhaHash;
  }
  public set setSenhaHash(value: string) {
    this.senhaHash = value;
  }

  @OneToMany(
    () => RegistroPrimario,
    (registroPrimario) => registroPrimario.funcionario,
  )
  public registroPrimario: RegistroPrimario;

  @OneToMany(
    () => RegistroSecundario,
    (registroSecundario) => registroSecundario.funcionario,
  )
  public registroSecundario: RegistroSecundario;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}

export default Funcionario;
