import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DatosCorporativos {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('bigint', {
    width: 12,
  })
  usuario: number;

  @Column('int', {
    width: 2,
  })
  bodegaId: number;

  @Column('int', {
    width: 3,
    nullable: true,
  })
  eps: number;

  @Column('int', {
    width: 3,
  })
  pension: number;

  @Column('int', {
    width: 3,
    nullable: true,
  })
  cesantias: number;

  @Column('int', {
    width: 3,
    nullable: true,
  })
  cajaCompenasacion: number;

  @Column('int', {
    width: 3,
    nullable: true,
  })
  arl: number;

  @Column('int', {
    width: 2,
    nullable: true,
  })
  tipoContrato: number;

  @Column('date')
  fechaIngreso: Date;

  @Column('int', {
    width: 2,
    nullable: true,
    comment: 'Cargo (Id) de la tabla cargo',
  })
  idCargo: string;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  numeroCuenta: string;

  @Column('varchar', {
    length: 150,
    nullable: true,
  })
  banco: string;

  @Column('float', {
    nullable: true,
  })
  salarioBasico: number;

  @Column('float', {
    nullable: true,
  })
  auxilioMovilidad: number;

  @Column('float', {
    nullable: true,
  })
  auxilioRodamiento: number;

  @Column('float', {
    nullable: true,
  })
  auxilioManutencion: number;

  @Column('varchar', {
    length: 50,
    nullable: true,
  })
  consecutivo: string;

  @Column('tinyint', {
    width: 1,
    nullable: true,
    comment: '0: No, 1: Si, 3: n/a',
  })
  rut: number;

  @Column('bigint', {
    width: 20,
    nullable: true,
    comment: 'Usuario del director de sucursal',
  })
  directorProyecto: number;

  @Column('varchar', {
    length: 18,
    nullable: true,
    comment:
      'Correlacionado con tabla proveedor, es quien certifia la experiencia laboral',
  })
  empresaCertifica: string;

  @Column('varchar', {
    length: 18,
    nullable: true,
    comment:
      'Empresa que contrata el personal ejemplo (sicte, tecnicas mistic, servicol, etc)',
  })
  empresaContratista: string;

  @Column('tinyint', {
    width: 11,
    comment: '1: Activo en la empresa, 0: Retirado de la empresa',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
