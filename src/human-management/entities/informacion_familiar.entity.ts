import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InformacionFamiliar {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 10,
  })
  idInformacionFamiliar: number;

  @Column('int', {
    width: 10,
  })
  idDatosPersonales3: number;

  @Column('int', {
    width: 3,
  })
  idParentezco: number;

  @Column('int', {
    width: 3,
  })
  tipoDocumento: number;

  @Column('bigint', {
    width: 12,
  })
  numeroIdentificacion: number;

  @Column('varchar', {
    length: 32,
  })
  primerApellido: string;

  @Column('varchar', {
    length: 32,
    nullable: true,
  })
  segundoApellido: string;

  @Column('varchar', {
    length: 32,
  })
  primerNombre: string;

  @Column('varchar', {
    length: 32,
    nullable: true,
  })
  segundoNombre: string;

  @Column('int', {
    width: 3,
  })
  genero: number;

  @Column('date')
  fechaNacimiento: Date;

  @Column('int', {
    width: 1,
    comment: '1: Si, 0: No ',
  })
  avisoEmergencia: number;

  @Column('varchar', {
    length: 15,
    nullable: true,
  })
  celular: string;

  @Column('tinyint', {
    width: 1,
    comment: '1: Si, 0: No',
  })
  convive: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
