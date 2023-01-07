import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RolloTrasladoReservas {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 8,
  })
  idTrasladoReserva: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  idLote: number;

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
  cantidadTrasladar: number;

  @Column('timestamp')
  fechaHora: Date;
}
