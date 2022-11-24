import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetallePreoperacional {
  @PrimaryGeneratedColumn('increment')
  idDetalle: number;

  @Column('int', {
    width: 11,
  })
  idEncabezado: number;

  @Column('int', {
    width: 11,
  })
  idItem: string;

  @Column('varchar', {
    length: 3,
  })
  rtaConductor: string;
}
