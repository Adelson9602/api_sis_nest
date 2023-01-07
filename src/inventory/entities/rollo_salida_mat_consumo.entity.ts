import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RolloSalidaMatConsumo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint', {
    width: 12,
  })
  idSalMatConsumo: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('int', {
    width: 2,
  })
  idTipoReserva: number;

  @Column('varchar', {
    length: 24,
  })
  rollo: string;

  @Column('int', {
    width: 3,
  })
  consecutivoRollo: number;

  @Column('int', {
    width: 4,
  })
  abscisaInicial: number;

  @Column('int', {
    width: 4,
  })
  abscisaFinal: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidad: number;

  @Column('timestamp')
  fechaControl: Date;
}
