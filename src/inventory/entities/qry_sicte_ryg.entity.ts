import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class QrySicteRyg {
  @PrimaryGeneratedColumn('increment')
  idQrySicteRyg: number;

  @Column('varchar', {
    length: 15,
  })
  idProductoQry: string;

  @Column('varchar', {
    length: 50,
  })
  serialQry: string;

  @Column('varchar', {
    length: 10,
  })
  estadoQry: string;

  @Column('varchar', {
    length: 10,
  })
  bodegaQry: string;

  @Column('int', {
    width: 2,
  })
  bodegaSis: number;

  @Column('varchar', {
    length: 50,
  })
  otQry: string;

  @Column('varchar', {
    length: 50,
  })
  cuentaQry: string;

  @Column('date')
  fechaQry: Date;
}
