import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DocumentosVehiculos {
  @PrimaryGeneratedColumn('increment')
  idDocVehiculo: number;

  @Column('varchar', {
    length: 6,
  })
  placa: string;

  @Column('date')
  fechaSoat: Date;

  @Column('mediumtext')
  fotoSoat: string;

  @Column('date')
  fechaTecnico: Date;

  @Column('mediumtext')
  fotoTecnico: string;

  @Column('date')
  fechaMatricula: Date;

  @Column('mediumtext')
  fotoMatriculaLa: string;

  @Column('mediumtext')
  fotoMatriculaLb: string;
}
