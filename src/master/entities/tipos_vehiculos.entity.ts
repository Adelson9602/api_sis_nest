import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TiposVehiculos {
  @PrimaryGeneratedColumn('increment')
  idTiposVehiculos: number;

  @Column('varchar', {
    length: 150,
  })
  tipoVehiculo: string;

  @Column('tinyint', {
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
