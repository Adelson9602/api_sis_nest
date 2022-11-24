import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MacDirection {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    length: 18,
  })
  direccionMac: string;

  @Column('bigint', {
    width: 12,
  })
  idUsuario: string;

  @Column('tinyint', {
    width: 1,
  })
  estado: number;

  @Column('bigint', {
    width: 12,
    comment: 'Datos de control',
  })
  idUsarioControl: number;

  @Column('timestamp', {
    comment: 'Datos de control',
  })
  fechaHora: Date;
}
