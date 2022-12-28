import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SubstringProductosSerial {
  @PrimaryGeneratedColumn('increment')
  idSubstringProductosSerial: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  cantDigitoTotal: number;

  @Column('int', {
    width: 2,
  })
  subtInicialRr: number;

  @Column('int', {
    width: 2,
  })
  subtFinalRr: number;

  @Column('int', {
    width: 2,
  })
  subtInicialSap: number;

  @Column('int', {
    width: 2,
  })
  subtFinalSap: number;

  @Column('int', {
    width: 1,
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
