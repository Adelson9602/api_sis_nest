import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class NotificacionesCorreos {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('bigint', {
    width: 12,
  })
  usuario: number;

  @Column('varchar', {
    length: 250,
  })
  correo: string;

  @Column('int', {
    width: 1,
  })
  estado: number;

  @Column('int', {
    width: 2,
    comment: '1: stock minimo bodega',
  })
  tipo: number;
}
