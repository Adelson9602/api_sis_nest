import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InventarioMovil {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 5,
  })
  idMovil: number;

  @Column('int', {
    width: 4,
  })
  idProyecto: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: number;

  @Column('int', {
    width: 2,
  })
  idBdega: number;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('int', {
    width: 2,
  })
  idTipoReserva: number;

  @Column('float') //20,2
  cantidadEntregada: number;

  @Column('float', {
    nullable: true,
  })
  cantidadPendiente: number; //20,2 Sí NULL
}
