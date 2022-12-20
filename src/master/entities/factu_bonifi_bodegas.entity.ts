import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FactuBonifiBodegas {
  @PrimaryGeneratedColumn('increment')
  idFactuBonifiBodegas: number;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 5,
  })
  idSubtipoConsumos: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  puntos: number;

  @Column('bigint', {
    width: 12,
  })
  idUsuario: number;

  @Column('timestamp')
  fechaControl: Date;
}
