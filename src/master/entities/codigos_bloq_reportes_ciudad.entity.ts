import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CodigosBloqReportesCiudad {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 5,
    comment: 'correlacionado con la tabla subtpoconsumo',
  })
  codigoFacturacion: number;

  @Column('varchar', {
    length: 15,
  })
  codigoMaterial: string;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('tinyint', {
    width: 1,
  })
  estado: number;

  @Column('bigint', {
    width: 20,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
