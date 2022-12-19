import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CodigosFallas {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    length: 3,
  })
  codigoFalla: string;

  @Column('varchar', {
    length: 150,
  })
  descripcionFalla: string;

  @Column('tinyint', {
    width: 1,
  })
  estadoFalla: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
