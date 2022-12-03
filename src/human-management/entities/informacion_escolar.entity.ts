import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InformacionEscolar {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 9,
  })
  idInfEscolar: number;

  @Column('int', {
    width: 10,
  })
  idDatosPersonales: number;

  @Column('int', {
    width: 3,
  })
  nivelEscolar: number;

  @Column('int', {
    width: 2,
    comment:
      'es el grado ultimo al que llego en la educacion ejemplo 6,7,8,9,10,11',
  })
  nivelAlcanzado: number;

  @Column('int', {
    width: 1,
    comment: '1: Si, 0: No',
  })
  graduado: number;

  @Column('varchar', {
    length: 150,
  })
  tituloObtenido: string;

  @Column('int', {
    width: 4,
  })
  anoGraduacion: number;

  @Column('int', {
    width: 3,
  })
  modalidad: number;

  @Column('int', {
    width: 1,
    comment: '1: Diurno, 2: Nocturno',
  })
  horario: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
