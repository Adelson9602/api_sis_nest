import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RolloEntradaInv {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    length: 30,
    comment: 'concatenado de Rollo, consecutivo rollo, bodega',
  })
  idRolloEntradaInv: string;

  @Column('int', {
    width: 6,
  })
  idEncEntradaInv: number;

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
    default: 0,
  })
  abscisaInicial: number;

  @Column('int', {
    width: 4,
  })
  abscisaFinal: number;

  @Column('varchar', {
    length: 10,
    default: 'NA',
  })
  loteFabricante: string;

  @Column('timestamp')
  fechaControl: Date;
}
