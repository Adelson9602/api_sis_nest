import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SeguridadSocial {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 11,
  })
  idEntidad: number;

  @Column('varchar', {
    length: 100,
  })
  descripcionEntidad: string;

  @Column('int', {
    width: 1,
  })
  estadoEntidad: number;

  @Column('int', {
    width: 2,
    comment: '1: Afp, 2: Arl, 3: Eps, 4: Caja',
  })
  tipoEntidad: number;

  @Column('bigint', {
    width: 20,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
