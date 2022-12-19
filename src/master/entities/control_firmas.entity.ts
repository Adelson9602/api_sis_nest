import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ControlFirmas {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('bigint', {
    width: 20,
  })
  usuarioFirma: number;

  @Column('varchar', {
    length: 50,
  })
  password: number;

  @Column('longtext')
  firma: string;

  @Column('tinyint', {
    width: 1,
  })
  aceptoPoliticaDatos: number;

  @Column('bigint', {
    width: 20,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
