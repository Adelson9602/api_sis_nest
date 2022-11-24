import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DatosVehiculos {
  @PrimaryGeneratedColumn('increment')
  idVehiculo: number;

  @Column('varchar', {
    primary: true,
    length: 6,
  })
  placa: string;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 11,
  })
  marca: number;

  @Column('varchar', {
    length: 100,
  })
  linea: string;

  @Column('int', {
    width: 11,
  })
  modelo: number;

  @Column('int', {
    width: 11,
  })
  cilindraje: number;

  @Column('varchar', {
    length: 100,
  })
  colorVehiculo: string;

  @Column('varchar', {
    length: 15,
  })
  colorPlaca: string;

  @Column('int', {
    width: 11,
  })
  ciudadMatricula: number;

  @Column('int', {
    width: 11,
  })
  tipoVehiculo: number;

  @Column('varchar', {
    length: 15,
  })
  colorCajon: string;

  @Column('tinyint')
  logosClaro: number;

  @Column('tinyint')
  aviso: number;

  @Column('varchar', {
    length: 250,
  })
  nombrePropietario: string;

  @Column('tinyint')
  estado: number;

  @Column('varchar', {
    length: 25,
  })
  licenciaTransito: string;

  @Column('varchar', {
    length: 50,
  })
  numeroMotor: string;

  @Column('varchar', {
    length: 50,
  })
  numeroChasis: string;

  @Column('varchar', {
    comment: 'Disel, gas, gasolina',
    length: 15,
  })
  tipoCombustible: string;

  @Column('varchar', {
    comment: 'Alquilado, leasing, propio',
    length: 25,
  })
  tipoContrato: string;

  @Column('varchar', {
    comment: 'Aplica solo si el tipo de vehiculo es diferente de moto',
    nullable: true,
    length: 250,
  })
  companiaPoliza: string;

  @Column('date', {
    comment: 'Es para la fecha en que pone en alquiler el vehiculo',
  })
  fechaIngreso: Date;

  @Column('date', {
    comment: 'Fecha en la que finaliza el contrato de alquiler del vehiculo',
    nullable: true,
  })
  fechaRetiro: Date;

  @Column('varchar', {
    length: 3,
    nullable: true,
  })
  retiraImagen: string;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
