import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ManoObra {
  @PrimaryGeneratedColumn('increment')
  idManoObra: number;

  @Column('varchar', {
    length: 128,
  })
  manoObra;
  @Column('int', {
    width: 2,
  })
  idUnidad: number;

  @Column('int', {
    width: 10,
  })
  codCliente: number;

  @Column('float')
  valor: number;

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
