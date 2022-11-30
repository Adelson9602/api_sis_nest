import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class ConsumoRollo {
  @PrimaryColumn('int', {
    width: 3,
  })
  consecutivoRollo: number;

  @Column('bigint', {
    width: 15,
  })
  idEncConsumos: number;

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
    width: 4,
  })
  abscisaInicial: number;

  @Column('int', {
    width: 4,
  })
  abscisaFinal: number;

  @Column('float')
  cantidad: number;

  @Column('timestamp')
  fechaHora: Date;
}
