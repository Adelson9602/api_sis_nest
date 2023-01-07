import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RolloSalidaPro {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    length: 24,
  })
  idRolloSalidaPro: string;

  @Column('int', {
    width: 5,
  })
  idEncSalidaPro: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto15: string;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('int', {
    width: 3,
  })
  consecutivoRollo: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidad: number;

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

  @Column('varchar', {
    length: 10,
  })
  loteFabricante: string;

  @Column('timestamp')
  fechaHora: Date;
}
