import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Parentezco {
  @PrimaryGeneratedColumn('increment')
  idParentezco: number;

  @Column('varchar', {
    length: 150,
  })
  parentezco: string;

  @Column('tinyint', {
    width: 1,
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
