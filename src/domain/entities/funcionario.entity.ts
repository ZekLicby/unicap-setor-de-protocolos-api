import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'Funcionarios' })
export class Funcionario {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'text' })
  public nome: string;

  @Column({ type: 'text' })
  public cargo: string;

  @Column({ type: 'date' })
  public dataNascimento: Date;

  @Column({ type: 'text' })
  public matricula: string;

  @Column({ type: 'text' })
  private senhaHash: string;
  public get getSenhaHash(): string {
    return this.senhaHash;
  }
  public set setSenhaHash(value: string) {
    this.senhaHash = value;
  }

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
