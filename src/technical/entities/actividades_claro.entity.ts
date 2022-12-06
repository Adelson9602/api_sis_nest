import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ActividadesClaro {
  @PrimaryGeneratedColumn('increment')
  idActividad: number;

  @Column('varchar', {
    length: 250,
  })
  descripcion: string;

  @Column('varchar', {
    length: 2,
  })
  prefijo: string;

  @Column('int', {
    width: 1,
    comment: '1: Interna, 2: externa y corporativo',
  })
  tipoOperacion: number;

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
