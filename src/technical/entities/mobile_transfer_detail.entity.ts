import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MobileTransferDetail {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 9,
  })
  idTrasladoMovil: number;

  @Column('int', {
    width: 2,
  })
  idReserva: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  idLote28: number;

  @Column('float')
  cantidadTrasladar: number;

  @Column('varchar', {
    length: 120,
  })
  observacion: string;
}
