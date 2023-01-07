import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialEntradaInventario {
  @PrimaryGeneratedColumn('increment')
  id: number;

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
  idLote6: number;

  @Column('int', {
    width: 2,
  })
  idTipoReserva: number;

  @Column('varchar', {
    length: 36,
  })
  serial: string;

  @Column('varchar', {
    length: 120,
    comment: 'Serial o Activo',
  })
  adicional1: string;

  @Column('varchar', {
    length: 120,
  })
  adicional2: string;

  @Column('datetime')
  fechaControl: Date;
}
