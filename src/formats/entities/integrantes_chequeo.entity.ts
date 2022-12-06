import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class IntegrantesChequeo {
  @PrimaryGeneratedColumn('increment')
  idIntegrantesChequeo: number;

  @Column('int', {
    primary: true,
    width: 11,
  })
  idEncChequeo: number;

  @Column('bigint', {
    width: 12,
  })
  usuario: number;

  @Column('varchar', {
    length: 500,
  })
  observacion: string;
}
