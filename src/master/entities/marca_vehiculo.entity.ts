import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MarcaVehiculo {
  @PrimaryGeneratedColumn('increment')
  idMarcaVehiculo: number;

  @Column('varchar', {
    length: 150,
  })
  marcaVehiculo: string;

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
