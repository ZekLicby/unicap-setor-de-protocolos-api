import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
