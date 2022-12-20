import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RolloRegBomReserva {
  @PrimaryGeneratedColumn('increment')
  idRolloRegBomReserva: number;

  @Column('int', {
    width: 11,
  })
  idDetRegBomReserva: number;

  @Column('varchar', {
    length: 50,
  })
  idBom: string;

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
  cantidad: number;
}
