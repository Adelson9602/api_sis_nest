import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CodigoRazon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 3,
  })
  codRazon: string;

  @Column('varchar', {
    length: 50,
  })
  descripcion: string;

  @Column('tinyint', {
    width: 1,
  })
  estado: string;

  @Column('bigint', {
    width: 12,
  })
  idUsuario: string;

  @Column('timestamp')
  fechaHora: Date;
}
