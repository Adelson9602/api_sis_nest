import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 18,
  })
  idProveedor: string;

  @Column('varchar', {
    length: 128,
  })
  proveedor: string;

  @Column('varchar', {
    length: 128,
  })
  nombreContacto: string;

  @Column('int', {
    width: 4,
  })
  ciudadProveedor: number;

  @Column('varchar', {
    length: 64,
  })
  direccionProv: string;

  @Column('varchar', {
    length: 14,
  })
  telefono1Prov: string;

  @Column('varchar', {
    length: 14,
  })
  telefono2Prov: string;

  @Column('varchar', {
    length: 64,
  })
  emailProv: string;

  @Column('varchar', {
    length: 64,
  })
  webProv: string;

  @Column('varchar', {
    length: 64,
  })
  cliente: string;

  @Column('tinyint', {
    width: 1,
    comment: '0: Inactivo, 1: Activo',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
