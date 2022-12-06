import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DocumentosConductor {
  @PrimaryGeneratedColumn('increment')
  idDocumentosConductor: number;

  @Column('bigint', {
    width: 12,
  })
  ccConductor: number;

  @Column('varchar', {
    length: 50,
  })
  numeroLicencia: string;

  @Column('varchar', {
    length: 50,
  })
  categoriaDocumento: string;

  @Column('varchar', {
    length: 200,
  })
  fechaLicencia: string;

  @Column('varchar', {
    length: 200,
  })
  fotoLicenciaLadoA: string;

  @Column('varchar', {
    length: 200,
  })
  fotoLicenciaLadoB: string;
}
